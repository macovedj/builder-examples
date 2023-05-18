export namespace Graph {
  export function addComponent(name: string, bytes: Uint8Array | ArrayBuffer): Component;
  export function instantiateComponent(id: ComponentId): InstanceId;
  export function connectInstances(source: InstanceId, sourceExport: number | null, target: InstanceId, targetImport: number): void;
  export function removeComponent(id: ComponentId): void;
  export function removeInstance(id: InstanceId): void;
  export function disconnectInstances(source: InstanceId, target: InstanceId, targetImport: number): void;
  export function printGraph(): string;
  export function encodeGraph(options: EncodeOptions): Uint8Array;
}
export type ComponentId = number;
/**
 * # Variants
 * 
 * ## `"module"`
 * 
 * ## `"function"`
 * 
 * ## `"value"`
 * 
 * ## `"type"`
 * 
 * ## `"instance"`
 * 
 * ## `"component"`
 */
export type ItemKind = 'module' | 'function' | 'value' | 'type' | 'instance' | 'component';
export interface Import {
  name: string,
  kind: ItemKind,
}
export interface Export {
  name: string,
  kind: ItemKind,
}
export interface Component {
  id: ComponentId,
  name: string,
  imports: Import[],
  exports: Export[],
  wit: string,
}
export type InstanceId = number;
export interface EncodeOptions {
  defineComponents: boolean,
  export?: InstanceId,
  validate: boolean,
}
