/* tslint:disable:variable-name */

// declare var Logger: {log: (...x) => string}

// https://github.com/Microsoft/TypeScript/issues/17340#issuecomment-316984951
// interface IData {
//   id: string|null

//   _accumulator: string[]
//   _cache: Properties
//   _data: object
//   _fields: object
//   _ns: string
// }

export class Model  {
  /*
   * Returns instance with properties assigned at instantiation
   *
   * @param data - Property object passed at time of instantiation
   */
  id: string
  _accumulator: string[]
  _data: object
  _ns: string
  _cache: Properties
  //
  fields: object
  _fields: object

  protected _updatedKeys: string[] = []

  constructor(data: IData = {id: null}, fields = {}, cache?) {
    this._cache = cache
    this._accumulator = []
    this._data = { id: data.id }
    this._fields = fields
    this.fields = fields
    this._ns = data.id

    const tempData = {}

    const fieldKeys = Object.keys(fields)

    void ((obj1, obj2) => {
      Object.keys(obj1).map((key) => {
        if (obj2.hasOwnProperty(key)) {
          tempData[key] = obj1[key]
        }
      })
    })(data, fields)

    // cleaned up data
    this._data = {...this._data, ...tempData }

    fieldKeys.map((fk) => {
      if (this._cache) {
        this._data[fk] = this._cache.getProperty(this._fields[fk])
      }
      Object.defineProperty(this, fk, {
        get: () => {
          if (this._cache) {
            return this._cache.getProperty(this._fields[fk])
          }
          return this._data[fk]
        },
        set: (value: any) => {
          let stored
          if (this._cache) {
            stored = this._cache.getProperty(this._fields[fk])
          }
          if (stored !== value) {
            this._updatedKeys.push(fk)
          }
          if (value == null) {
            value = undefined
          } else {
            value = value.toString()
          }
          // if (this._cache) {
          this._cache.setProperty(this._fields[fk], value)
          // }
          this._data[fk] = value
        },
      })
    })
    Object.freeze(this)
  }
}
