# Як вставити це у свій репозиторій 05-notehub

## 1. Скопіювати файли

Розпакуй архів і перенеси вміст папки `src/` у свій `src/` (заміни `App.tsx` /
`App.css`, які створив Vite за замовчуванням — видали старий `App.css`,
`main.tsx` і `index.css`, якщо конфліктують).

Фінальна структура:

```
src/
  types/
    note.ts
  services/
    noteService.ts
  components/
    App/
      App.tsx
      App.module.css
    NoteList/
      NoteList.tsx
      NoteList.module.css
    Modal/
      Modal.tsx
      Modal.module.css
    NoteForm/
      NoteForm.tsx
      NoteForm.module.css
    Pagination/
      Pagination.tsx
      Pagination.module.css
    SearchBox/
      SearchBox.tsx
      SearchBox.module.css
    Loader/
      Loader.tsx
      Loader.module.css
    ErrorMessage/
      ErrorMessage.tsx
      ErrorMessage.module.css
  main.tsx
  index.css
```

Стилі в цьому наборі — базові (написані самостійно), просто щоб усе
виглядало акуратно й компілювалось без помилок. За завданням стилі мають
бути скопійовані з `https://github.com/goitacademy/react-notehub-styles`
(на момент генерації цей репозиторій виявився порожнім — можливо, доступ
до нього відкривається під час курсу). Коли отримаєш реальні `.module.css`
файли — просто заміни вміст відповідних файлів у папках компонентів,
JSX/логіку компонентів змінювати не потрібно (класи названі так само, як у
завданні: `css.app`, `css.list`, `css.listItem`, `css.backdrop`, `css.form`
і т.д.).

## 2. Додати `<div id="modal-root"></div>` в `index.html`

У корені `index.html` (поряд з `<div id="root"></div>`):

```html
<div id="root"></div>
<div id="modal-root"></div>
```

(Якщо цього не зробити — нічого не зламається, Modal підстрахований і
змонтується в `document.body`, але за завданнями курсу зазвичай очікують
саме окремий `modal-root`.)

## 3. Встановити залежності

```bash
npm install axios @tanstack/react-query react-paginate formik yup use-debounce modern-normalize
```

## 4. Змінна оточення

Створи `.env` у корені проєкту (скопіювавши `.env.example`):

```
VITE_NOTEHUB_TOKEN=твій_персональний_токен
```

Токен отримуєш у документації бекенда:
https://notehub-public.goit.study/api/docs

## 5. Перевірка

```bash
npm run dev
```

Переконайся, що:
- нотатки завантажуються при відкритті;
- пошук (з дебаунсом) фільтрує список;
- пагінація зʼявляється лише коли сторінок > 1;
- кнопка "Create note +" відкриває модалку, форма валідується (Formik + Yup);
- Escape і клік на бекдроп закривають модалку;
- кнопка Delete видаляє нотатку і оновлює список;
- у консолі немає помилок/попереджень.

## 6. Деплой

Задеплой на Vercel, додай `VITE_NOTEHUB_TOKEN` у Environment Variables
проєкту на Vercel, і після деплою ще раз перевір увесь функціонал на
production URL.
