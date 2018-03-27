declare type LoginFormType = {
  email: string,
  password: string
}

declare type BasicActionType = {
  type: string,
  payload: Object
}

declare type memberType = {
  _id: string,
  email: string,
  name: string,
  cellPhone: string,
  tags: Array<string>,
  role: string,
  notes: Array<string>,
}
