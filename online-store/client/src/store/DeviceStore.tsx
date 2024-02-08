import { makeAutoObservable } from "mobx";
interface ITypes {
  id: number;
  name: string;
}
interface IBrands {
  id: number;
  name: string;
}
interface Idevices {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

interface IDeviceStore {
  _types: ITypes[];
  _brands: IBrands[];
  _devices: Idevices[];
}

export default class DeviceStore implements IDeviceStore {
  _types: ITypes[];
  _brands: IBrands[];
  _devices: Idevices[];
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
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

  get type() {
    return this._types;
  }

  get brand() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
