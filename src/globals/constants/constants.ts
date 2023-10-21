import { TCars } from "../../typesAndInterfaces/types";

const TEXT = {
	fillFields: "Пожалуйста, заполните все поля",
	authIsNotCorrect: "Логин или пароль не верные",
	nameUser: "Имя пользователя",
	password: "Пароль",
	login: "Войти",
	auth: "Авторизация",
	logout: "Выйти",
	cars: "Автомобили",
	listEmpty: "Список пуст",
	error: "Что то пошло не так",
	back: "Назад",
	loading: "Загрузка",
	addCar: "Добавить",
	addCarSuccessfully: "Автомобиль успешно добавлен",
	addCarError: "Ошибка при добавление автомобиля",
	notFoundPage: "Страница не найдена",
	goToHome: "Вернутся на главную",
	km: "км",
}

const enum NAME_PAGES {
	login = "login",
	listCars = "list-cars",
	addCar = "add-car",
}

const NAME_ID_FOR_PAGES = {
  listCars: "idCar",
};

const enum CONTROLLERS {
	users = "users",
	cars = "cars",
}

const enum METHOD_HTTP {
	get = "get",
	post = "post",
	delete = "delete",
	put = "put"
}

const enum CODE_ANSWER {
	ok = 200,
	bad = 404
}

const API_URL = 'http://localhost:5000';

const DIRECTORY_IMAGES = "/assets/images/";

const CARS_KEYS_OBJECT: { [K in TCars.Keys]: K } = {
	id: "id",
  image: "image",
  brand: "brand",
  model: "model",
  color: "color",
  price: "price",
  year: "year",
  engine_type: "engine_type",
  transmission: "transmission",
  range: "range"
};

const COLUMNS_CARS: { [K in TCars.Keys]: string } = {
	id: "ID",
	image: "Изображение",
	brand: "Бренд",
	model: "Модель",
	color: "Цвет",
	price: "Цена",
	year: "Год выпуска",
	engine_type: "Тип двигателя",
	transmission: "Трансмиссия",
	range: "Запас хода"
}

export {
	TEXT,
	NAME_PAGES,
	NAME_ID_FOR_PAGES,
	CONTROLLERS,
	METHOD_HTTP,
	CODE_ANSWER,
	API_URL,
	DIRECTORY_IMAGES,
	CARS_KEYS_OBJECT,
	COLUMNS_CARS
}