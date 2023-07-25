export interface Role {
    name: string,
    title: string,
    description: string,
    includedPermissions: string[],
    stage: any,
    etag: string,
}