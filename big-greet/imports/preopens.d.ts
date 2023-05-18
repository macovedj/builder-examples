export namespace Preopens {
  export function getStdio(): StdioPreopens;
  export function getDirectories(): [Descriptor, string][];
}
export type InputStream = number;
export type OutputStream = number;
export interface StdioPreopens {
  stdin: InputStream,
  stdout: OutputStream,
  stderr: OutputStream,
}
export type Descriptor = number;
