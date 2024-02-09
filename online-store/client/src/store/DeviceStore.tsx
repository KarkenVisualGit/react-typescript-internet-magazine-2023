import { makeAutoObservable } from "mobx";
export interface ITypes {
  id: number;
  name: string;
}
export interface IBrands {
  id: number;
  name: string;
}
export interface IDevices {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export interface IDeviceStore {
  _types: ITypes[];
  _brands: IBrands[];
  _devices: IDevices[];
}

export default class DeviceStore implements IDeviceStore {
  _types: ITypes[];
  _brands: IBrands[];
  _devices: IDevices[];
  _selectedType: ITypes | null;
  _selectedBrand: IBrands | null;
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Телевизоры" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Asus" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/IPhone_5.png",
      },
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/IPhone_5.png",
      },
      {
        id: 3,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/IPhone_5.png",
      },
      {
        id: 4,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/IPhone_5.png",
      },
      {
        id: 5,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/IPhone_5.png",
      },
      {
        id: 6,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/IPhone_5.png",
      },
      {
        id: 7,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/IPhone_5.png",
      },
    ];
    this._selectedType = null;
    this._selectedBrand = null;
    makeAutoObservable(this);
  }

  setTypes(types: ITypes[]) {
    this._types = types;
  }

  setBrands(brands: IBrands[]) {
    this._brands = brands;
  }

  setDevices(devices: IDevices[]) {
    this._devices = devices;
  }
  setSelectedTypes(type: ITypes | null) {
    this._selectedType = type;
  }
  setSelectedBrand(brand: IBrands | null) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
