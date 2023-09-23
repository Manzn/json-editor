import {IJson} from "@/src/model/JSONModel";

export default class JSONInterpreterService {
    private readonly jsonFile: IJson;

    constructor(json: IJson) {
        this.jsonFile = json;
    }
}
