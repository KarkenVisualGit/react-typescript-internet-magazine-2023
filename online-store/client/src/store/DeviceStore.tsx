import { makeAutoObservable } from "mobx";
export interface ITypes {
  id: number;
  name: string;
}
export interface IBrands {
  id: number;
  name: string;
}
export interface Idevices {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export interface IDeviceStore {
  _types: ITypes[];
  _brands: IBrands[];
  _devices: Idevices[];
}

export default class DeviceStore implements IDeviceStore {
  _types: ITypes[];
  _brands: IBrands[];
  _devices: Idevices[];
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
        img: "https://unsplash.com/photos/silver-iphone-6-with-blue-case-OjMyiwfviQ4",
      },
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://unsplash.com/photos/silver-iphone-6-with-blue-case-OjMyiwfviQ4",
      },
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://unsplash.com/photos/silver-iphone-6-with-blue-case-OjMyiwfviQ4",
      },
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://unsplash.com/photos/silver-iphone-6-with-blue-case-OjMyiwfviQ4",
      },
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://unsplash.com/photos/silver-iphone-6-with-blue-case-OjMyiwfviQ4",
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

  setDevices(devices: Idevices[]) {
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
