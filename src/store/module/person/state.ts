export interface IState {
  name: string,
  sex: string,
  age: number
}

export class State implements IState {
  name: string
  sex: string
  age: number

  constructor () {
    this.name = 'Jusi'
    this.sex = 'woman'
    this.age = 27
  }
}
