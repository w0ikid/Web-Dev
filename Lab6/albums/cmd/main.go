package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
	"strings"
)

// Album представляет структуру данных альбома
type Album struct {
	UserID int    `json:"userId"`
	ID     int    `json:"id"`
	Title  string `json:"title"`
}

// Photo представляет структуру данных фотографии
type Photo struct {
	AlbumID      int    `json:"albumId"`
	ID           int    `json:"id"`
	Title        string `json:"title"`
	URL          string `json:"url"`
	ThumbnailURL string `json:"thumbnailUrl"`
}

var albums []Album
var photos []Photo
var nextAlbumID int = 101 // Начнем с ID 101, так как в вашем файле последний ID 100

func main() {
	// Загрузка данных из JSON-файла
	data, err := ioutil.ReadFile("data.json")
	if err != nil {
		log.Fatalf("Ошибка при чтении файла: %v", err)
	}

	// Разбор JSON в слайс структур
	err = json.Unmarshal(data, &albums)
	if err != nil {
		log.Fatalf("Ошибка при разборе JSON: %v", err)
	}

	// Создадим несколько фиктивных фотографий для тестирования
	photos = []Photo{
		{AlbumID: 1, ID: 1, Title: "Photo 1", URL: "https://example.com/photo1.jpg", ThumbnailURL: "https://example.com/thumb1.jpg"},
		{AlbumID: 1, ID: 2, Title: "Photo 2", URL: "https://example.com/photo2.jpg", ThumbnailURL: "https://example.com/thumb2.jpg"},
		{AlbumID: 2, ID: 3, Title: "Photo 3", URL: "https://example.com/photo3.jpg", ThumbnailURL: "https://example.com/thumb3.jpg"},
	}

	// Настройка маршрутов
	http.HandleFunc("/albums", handleAlbums)
	http.HandleFunc("/albums/", handleAlbumWithID)

	// Включаем CORS для Angular
	http.HandleFunc("/", enableCORS(http.DefaultServeMux))

	// Запуск сервера
	fmt.Println("Сервер запущен на порту 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

// Middleware для включения CORS
func enableCORS(handler http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		
		handler.ServeHTTP(w, r)
	}
}

// handleAlbums обрабатывает запросы к /albums
func handleAlbums(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	switch r.Method {
	case "GET":
		// Получить все альбомы
		json.NewEncoder(w).Encode(albums)
	case "POST":
		// Добавить новый альбом
		var album Album
		if err := json.NewDecoder(r.Body).Decode(&album); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		
		// Присваиваем новый ID
		album.ID = nextAlbumID
		nextAlbumID++
		
		// Добавляем в коллекцию
		albums = append(albums, album)
		
		// Отправляем созданный альбом обратно
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(album)
	default:
		http.Error(w, "Метод не поддерживается", http.StatusMethodNotAllowed)
	}
}

// handleAlbumWithID обрабатывает запросы к /albums/{id} и /albums/{id}/photos
func handleAlbumWithID(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	// Разбираем путь
	path := strings.TrimPrefix(r.URL.Path, "/albums/")
	pathParts := strings.Split(path, "/")
	
	if len(pathParts) < 1 {
		http.Error(w, "Неверный URL", http.StatusBadRequest)
		return
	}
	
	// Получаем ID альбома
	id, err := strconv.Atoi(pathParts[0])
	if err != nil {
		http.Error(w, "ID должен быть числом", http.StatusBadRequest)
		return
	}
	
	// Проверяем, запрашиваются ли фотографии для альбома
	if len(pathParts) > 1 && pathParts[1] == "photos" {
		handleAlbumPhotos(w, r, id)
		return
	}
	
	// Обработка одного альбома
	switch r.Method {
	case "GET":
		// Поиск альбома по ID
		for _, album := range albums {
			if album.ID == id {
				json.NewEncoder(w).Encode(album)
				return
			}
		}
		http.Error(w, "Альбом не найден", http.StatusNotFound)
	
	case "PUT":
		// Обновление альбома
		var updatedAlbum Album
		if err := json.NewDecoder(r.Body).Decode(&updatedAlbum); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		
		// Ищем альбом для обновления
		for i, album := range albums {
			if album.ID == id {
				// Обновляем данные, но сохраняем исходный ID
				updatedAlbum.ID = id
				albums[i] = updatedAlbum
				json.NewEncoder(w).Encode(updatedAlbum)
				return
			}
		}
		http.Error(w, "Альбом не найден", http.StatusNotFound)
	
	case "DELETE":
		// Удаление альбома
		for i, album := range albums {
			if album.ID == id {
				// Удаляем альбом из слайса
				albums = append(albums[:i], albums[i+1:]...)
				w.WriteHeader(http.StatusOK)
				return
			}
		}
		http.Error(w, "Альбом не найден", http.StatusNotFound)
	
	default:
		http.Error(w, "Метод не поддерживается", http.StatusMethodNotAllowed)
	}
}

// handleAlbumPhotos обрабатывает запросы фотографий для альбома
func handleAlbumPhotos(w http.ResponseWriter, r *http.Request, albumID int) {
	if r.Method != "GET" {
		http.Error(w, "Метод не поддерживается для фотографий", http.StatusMethodNotAllowed)
		return
	}
	
	// Фильтруем фотографии по albumID
	var albumPhotos []Photo
	for _, photo := range photos {
		if photo.AlbumID == albumID {
			albumPhotos = append(albumPhotos, photo)
		}
	}
	
	// Возвращаем фотографии (даже если список пустой)
	json.NewEncoder(w).Encode(albumPhotos)
}