import sequelize from "../db";

import { DataTypes } from "sequelize";
import { BuildOptions, Model } from "sequelize";

interface IUserAttributes {
  id: number;
  email: string;
  password: string;
  role?: string;
}

interface IDeviceAttributes {
  id?: number;
  name: string;
  price: number;
  rating?: number;
  brandId: number;
  typeId: number;
  img: string;
}
interface IDeviceModel extends Model<IDeviceAttributes>, IDeviceAttributes {}
type DeviceStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IDeviceModel;
  create(
    values?: IDeviceAttributes,
    options?: BuildOptions
  ): Promise<IDeviceModel>;
};

interface IUserModel extends Model<IUserAttributes>, IUserAttributes {}
type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUserModel;
};

interface IBasketAttributes {
  id: number;
}
interface IBasketModel extends Model<IBasketAttributes>, IBasketAttributes {}
type BasketStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IBasketModel;
};

interface IBasketDeviceAttributes {
  id: number;
}
interface IBasketDeviceModel
  extends Model<IBasketDeviceAttributes>,
    IBasketDeviceAttributes {}
type BasketDeviceStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IBasketDeviceModel;
};

interface ITypeAttributes {
  id?: number;
  name: string;
}
interface ITypeModel extends Model<ITypeAttributes>, ITypeAttributes {}
type TypeStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ITypeModel;
  create(values?: ITypeAttributes, options?: BuildOptions): Promise<ITypeModel>;
};

interface IBrandAttributes {
  id?: number;
  name: string;
}
interface IBrandModel extends Model<IBrandAttributes>, IBrandAttributes {}
type BrandStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IBrandModel;
  create(
    values?: IBrandAttributes,
    options?: BuildOptions
  ): Promise<IBrandModel>;
};

interface ITypeBrandAttributes {
  id: number;
}
interface ITypeBrandModel
  extends Model<ITypeBrandAttributes>,
    ITypeBrandAttributes {}
type TypeBrandStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ITypeBrandModel;
};

interface IRatingAttributes {
  id: number;
  user_id: number;
  device_id: number;
  rate: number;
}
interface IRatingModel extends Model<IRatingAttributes>, IRatingAttributes {}
type RatingStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IRatingModel;
};

interface IDeviceInfoAttributes {
  id: number;
  title: string;
  description: string;
}
interface IDeviceInfoModel
  extends Model<IDeviceInfoAttributes>,
    IDeviceInfoAttributes {}
type DeviceInfoStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IDeviceInfoModel;
};

const User = <UserStatic>sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = <BasketStatic>sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevice = <BasketDeviceStatic>sequelize.define("basket_device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Device = (<DeviceStatic>sequelize.define("device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  brandId: { type: DataTypes.INTEGER, allowNull: false },
  typeId: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
})) as DeviceStatic;

const Type = (<TypeStatic>sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})) as TypeStatic;

const TypeBrand = <TypeBrandStatic>sequelize.define("type_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Brand = (<BrandStatic>sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})) as BrandStatic;

const Rating = <RatingStatic>sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, unique: true, allowNull: false },
  device_id: { type: DataTypes.INTEGER, unique: true, allowNull: false },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const DeviceInfo = <DeviceInfoStatic>sequelize.define("device_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo);
DeviceInfo.belongsTo(Device);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

export {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  TypeBrand,
  DeviceInfo,
};
