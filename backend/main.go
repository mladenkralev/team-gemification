package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	dist := "../awesomeProject/frontend/dist/frontend/browser"
	serveAngularApp(dist)
}

func serveAngularApp(dist string) {
	fs := http.FileServer(http.Dir(dist))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		requestPath := filepath.Join(dist, filepath.Clean(r.URL.Path))
		stat, err := os.Stat(requestPath)

		if err == nil && !stat.IsDir() {
			fs.ServeHTTP(w, r)
			return
		}

		http.ServeFile(w, r, filepath.Join(dist, "index.html"))
	})

	log.Printf("✅ Serving from: %s", dist)
	log.Println("🚀 Running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
