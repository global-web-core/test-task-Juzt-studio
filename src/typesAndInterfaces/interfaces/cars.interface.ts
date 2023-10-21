interface Car {
	image: string;
  brand: string;
  model: string;
  color: string;
  price: number;
  year: number;
  engine_type?: "Бензиновый" | "Дизельный" | "Электрический";
  transmission?: "Автоматическая" | "Ручная" | "Роботизированная";
  range?: number;
}

export interface Db extends Car {
	id: number;
}

export interface Add extends Car {

}