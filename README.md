# 💻 Online Compiler Frontend

This is the **frontend** interface for the CodePlayground platform — an interactive code editor that allows users to write, compile, and execute code in multiple languages like Python, C++, Java, and JavaScript.

---

## ✨ Features

- 📝 Monaco-based code editor with syntax highlighting
- 🌗 Dark and light theme support
- 🚀 Execute code across multiple languages
- 🔁 Undo/Redo functionality
- 📁 Open/Save files locally
- ⌨️ Input and Output terminals
- 🌐 Communicates with a microservices-based backend via a gateway API

---

## 🛠️ Tech Stack

- **React** (Vite)
- **Monaco Editor**
- **Tailwind CSS**
- **Custom REST API Gateway** for backend requests

---

## 🧪 Supported Languages

- Python
- C++
- Java
- JavaScript

---

## 🚀 Getting Started

```bash
git clone https://github.com/Yashu212/Online_Compiler.git
cd Online_Compiler
npm install
npm run dev
```
## 🌐 Backend Integration

This frontend connects to a backend hosted at:
``` url
https://compilergatewayservice.onrender.com/run
```

Make sure the backend (API Gateway and language services) is running before using the **Run** button.
You can update the backend URL directly in the `handleRun` function or configure it using environment variables for production deployment.

## 👨‍💻 Author

Built by **Yash Kesarwani** as part of a full-stack code execution playground using microservices architecture.

