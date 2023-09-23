export interface IJson {
    title: string,
    description: string,
    fields: IField[]
}

interface IField {
    title: string,
    description: string
}
