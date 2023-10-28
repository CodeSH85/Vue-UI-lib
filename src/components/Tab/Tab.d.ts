export interface Tab {
  id: number;
  title: string;
  key: number | string;
  isSave?: boolean;
  componentId: string;
}
