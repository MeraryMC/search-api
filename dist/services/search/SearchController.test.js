"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
const Controller = __importStar(require("./SearchController"));
jest.mock("request-promise");
describe("SearchController", () => {
    test("an empty query string", () => __awaiter(this, void 0, void 0, function* () {
        request_promise_1.default.mockImplementation(() => '{"features": []}');
        const result = yield Controller.getPlacesByName("Paris");
        expect(result).toEqual({ features: [] });
    }));
    test("an invalid non-json response", () => __awaiter(this, void 0, void 0, function* () {
        request_promise_1.default.mockImplementation(() => "Service Unavailable.");
        yield expect(Controller.getPlacesByName("Chamonix")).rejects.toThrow(SyntaxError);
    }));
});
//# sourceMappingURL=SearchController.test.js.map