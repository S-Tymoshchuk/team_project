export interface IImage {
  fileId: string;
  link: string;
  user: string;
}
export interface IAttachment {
  attachment:IImage[]
}

export interface IRemoveImage {
  id: string;
}

