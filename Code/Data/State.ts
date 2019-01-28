declare var Logger: {log: (...x) => string}

// https://github.com/Microsoft/TypeScript/issues/17340#issuecomment-316984951
interface IData {
    id: string
    [propName: string]: any
}

class Model  {
    /*
     * Returns instance with properties assigned at instantiation
     *
     * @param data - Property object passed at time of instantiation
     */

    data: IData
    fields: IData
    ns: IData
    properties: IData

    accumulator: IData

    instantiated: IData = false

    protected updatedKeys: string[] = []

    constructor(data: IData = {id: null}, fields: IData = {}) {
        ns = data.id
        this.data = data
        this.fields = fields
        dataKeys = Object.keys(this.data)
        fieldKeys = Object.keys(this.fields)

        this.accumulator = []

        fieldKeys.map((fk) => {
            if (data.hasOwnProperty(fk)) {
                if (fields[fk] === ns + fk) {
                    this.accumulator.push(fk)
                    userProperties.setProperty(ns + fk, (data[fk]).toString())
                    this.data[fk] = (data[fk]).toString()
                    //
                }
            } else {
                this.data[fk] = undefined
                userProperties.setProperty(ns + fk, undefined)
            }
            Object.defineProperty(this, fk, {
                get: () => {
                    return userProperties.getProperty(ns + fk)
                },
                set: (value: any) => {
                    if (userProperties.getProperty(ns + fk) !== value) {
                        this.updatedKeys.push("balls")
                    }
                    this.data[fk] = value
                    userProperties.setProperty(ns + fk, value.toString())
                },
            })
        })
    }
}
//
function userStateTest() {
    // I think this is working!
    clearConfig()
    const props =  dictionary.PROPS.USER
    const U = (new Model({id: "USER_"}, props))

    U.LON = "50.7773"
    return [
        U.data,
        userProperties.getProperty("USER_LON"),
        U.updatedKeys,
        //    userProperties.getProperty("USER_NAME"),
        //         userProperties.getProperty("USER_ZIP_CODE"),
        //         userProperties.getProperty("USER_LON"),
    ]
}
// needs to block non-correct properties
// need to allow case insensitive
// instantiation should mean you have ALL properties from dictionary
// make sure updatedKeys is working properly
