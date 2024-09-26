"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const RoutersUsers_1 = __importDefault(require("../../routers/RoutersUsers"));
const RoutersVentas_1 = __importDefault(require("../../routers/RoutersVentas"));
const RoutersCustomers_1 = __importDefault(require("../../routers/RoutersCustomers"));
const RoutersSucursal_1 = __importDefault(require("../../routers/RoutersSucursal"));
const RoutersBodega_1 = __importDefault(require("../../routers/RoutersBodega"));
const RouterReporteAdmin_1 = __importDefault(require("../../routers/RouterReporteAdmin"));
const RouterProduct_1 = __importDefault(require("../../routers/RouterProduct"));
const RouterInventario_1 = __importDefault(require("../../routers/RouterInventario"));
const RouterTarjeta_1 = __importDefault(require("../../routers/RouterTarjeta"));
const Coneccion_1 = __importDefault(require("../../data/Coneccion"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.puerto = process.env.PORT || "3001";
        this.listen();
        this.casteoJSON();
        this.routes();
        this.getConeccionDb();
    }
    listen() {
        this.app.listen(this.puerto, () => {
            console.log(`aplicacion corriendo en puert ${this.puerto}`);
        });
    }
    routes() {
        this.app.get("/", (request, response) => {
            response.json({
                msg: "API corriendo... Hola Luis",
            });
        });
        //routers: users, ventas, customers, sucursal
        this.app.use("/api/users", RoutersUsers_1.default);
        this.app.use("/api/ventas", RoutersVentas_1.default);
        this.app.use("/api/customers", RoutersCustomers_1.default);
        this.app.use("/api/sucursal", RoutersSucursal_1.default);
        this.app.use("/api/bodega", RoutersBodega_1.default);
        this.app.use("/api/reportsAdmin", RouterReporteAdmin_1.default);
        this.app.use("/api/products", RouterProduct_1.default);
        this.app.use("/api/inventario", RouterInventario_1.default);
        this.app.use("/api/tarjetas", RouterTarjeta_1.default);
    }
    casteoJSON() {
        //parseamos el body
        this.app.use(express_1.default.json());
        //agregamos cors
        this.app.use((0, cors_1.default)());
    }
    getConeccionDb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Coneccion_1.default.authenticate();
                console.log("Conectado a DB!!!.");
            }
            catch (error) {
                console.error("Error al conectarse a la base de datos:\n", error);
            }
        });
    }
}
exports.Server = Server;
