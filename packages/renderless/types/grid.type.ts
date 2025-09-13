export interface IGridEvent {
  selectAll: Function
}

export interface IGridColumn {
  field: string
  title: string
}

export interface IGridConfig {
  columns: IGridColumn[]
  data: any[]
  border: boolean
  event: IGridEvent
  treeConfig: any
  selectConfig: any
}

export type IGriOp = Partial<IGridConfig>
