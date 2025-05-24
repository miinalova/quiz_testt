export const questions = [
  // --- HTML ---
  { category: "HTML", question: "Что делает тег <a> в HTML?", options: ["Создает заголовок", "Создает ссылку", "Создает таблицу", "Создает форму"], answer: "Создает ссылку" },
  { category: "HTML", question: "Какой атрибут отвечает за отображение подсказки при наведении?", options: ["id", "alt", "href", "title"], answer: "title" },
  { category: "HTML", question: "Какой тег используется для вставки изображения?", options: ["<image>", "<img>", "<src>", "<pic>"], answer: "<img>" },
  { category: "HTML", question: "Что делает тег <em>?", options: ["Выделяет текст курсивом", "Делает текст жирным", "Создает таблицу", "Добавляет изображение"], answer: "Выделяет текст курсивом" },
  { category: "HTML", question: "Какой тег используется для создания выпадающего списка?", options: ["<input>", "<ul>", "<select>", "<dropdown>"], answer: "<select>" },
  { category: "HTML", question: "Что делает атрибут 'target=\"_blank\"' в ссылке?", options: ["Открывает в текущем окне", "Открывает в новом окне/вкладке", "Открывает как всплывающее окно", "Закрывает ссылку"], answer: "Открывает в новом окне/вкладке" },

  // --- CSS ---
  { category: "CSS", question: "Какое свойство CSS отвечает за цвет текста?", options: ["background", "font-weight", "color", "text-align"], answer: "color" },
  { category: "CSS", question: "Как задать жирный текст в CSS?", options: ["font-style: bold;", "text-decoration: bold;", "font-weight: bold;", "font-size: bold;"], answer: "font-weight: bold;" },
  { category: "CSS", question: "Как применить внешний CSS файл к HTML?", options: ["<style src='style.css'>", "<css href='style.css'>", "<link rel='stylesheet' href='style.css'>", "<script src='style.css'>"], answer: "<link rel='stylesheet' href='style.css'>" },
  { category: "CSS", question: "Какое свойство отвечает за внутренний отступ элемента?", options: ["margin", "border", "padding", "spacing"], answer: "padding" },
  { category: "CSS", question: "Что делает свойство 'z-index'?", options: ["Изменяет прозрачность", "Определяет порядок наложения элементов", "Меняет шрифт", "Добавляет тень"], answer: "Определяет порядок наложения элементов" },
  { category: "CSS", question: "Как задать градиент фона в CSS?", options: ["background: color-fade;", "background: gradient();", "background: linear-gradient(...);", "background: fade-in;"], answer: "background: linear-gradient(...);" },

  // --- JavaScript ---
  { category: "JavaScript", question: "Как объявить переменную в JavaScript?", options: ["variable x = 5;", "var x = 5;", "int x = 5;", "let = x 5;"], answer: "var x = 5;" },
  { category: "JavaScript", question: "Какой тип данных в JS обозначает 'ничего'?", options: ["undefined", "null", "empty", "NaN"], answer: "null" },
  { category: "JavaScript", question: "Какой метод вызывает всплывающее окно?", options: ["prompt()", "log()", "popup()", "confirm()"], answer: "prompt()" },
  { category: "JavaScript", question: "Какой оператор используется для строгого сравнения?", options: ["==", "!=", "===", "="], answer: "===" },
  { category: "JavaScript", question: "Что вернёт typeof null?", options: ["null", "object", "undefined", "boolean"], answer: "object" },
  { category: "JavaScript", question: "Какой метод массива вызывает функцию для каждого элемента?", options: ["forEach()", "map()", "filter()", "reduce()"], answer: "forEach()" },

  // --- GitHub ---
  { category: "GitHub", question: "Какой командой добавить файл в коммит?", options: ["git commit", "git push", "git add", "git init"], answer: "git add" },
  { category: "GitHub", question: "Какой файл используется для описания репозитория?", options: ["about.md", "info.txt", "README.md", "start.js"], answer: "README.md" },
  { category: "GitHub", question: "Что делает команда git clone?", options: ["Удаляет репозиторий", "Объединяет ветки", "Копирует удалённый репозиторий", "Создает новый коммит"], answer: "Копирует удалённый репозиторий" },
  { category: "GitHub", question: "Как создать новую ветку в git?", options: ["git branch new", "git checkout", "git branch <название>", "git new-branch"], answer: "git branch <название>" },
  { category: "GitHub", question: "Как просмотреть историю коммитов?", options: ["git history", "git log", "git commits", "git status"], answer: "git log" },
  { category: "GitHub", question: "Что делает команда git pull?", options: ["Отправляет изменения на GitHub", "Получает изменения из удалённого репозитория", "Сравнивает ветки", "Удаляет репозиторий"], answer: "Получает изменения из удалённого репозитория" }
];
