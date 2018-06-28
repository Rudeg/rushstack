// @public
enum FileConstants {
  PackageJson = "package.json"
}

// @public
class FileDiffTest {
  static assertEqual(actualFilePath: string, expectedFilePath: string): void;
  static clearCache(): void;
  static prepareFolder(unitTestDirName: string, testModule: string): string;
}

// @public
class FileSystem {
  static changeMode(path: string, mode: number): void;
  static copyFile(sourcePath: string, destinationPath: string): void;
  static createFolder(folderPath: string): void;
  static createHardLinkToFile(linkSource: string, linkTarget: string): void;
  static createSymbolicLinkToFile(linkSource: string, linkTarget: string): void;
  static createSymbolicLinkToFolder(linkSource: string, linkTarget: string): void;
  static deleteFile(filePath: string, options?: IDeleteFileOptions): void;
  static deleteFolder(folderPath: string): void;
  static emptyFolder(folderPath: string): void;
  static exists(path: string): boolean;
  static followLink(linkPath: string): string;
  static getLinkStatistics(path: string): fs.Stats;
  static getStatistics(path: string): fs.Stats;
  static move(sourcePath: string, destinationPath: string, options?: IMoveOptions): void;
  static readFile(filePath: string, options?: IReadFileOptions): string;
  static readFileToBuffer(filePath: string): Buffer;
  static readFolder(folderPath: string, options?: IReadFolderOptions): Array<string>;
  static updateTimes(path: string, accessedTime: number, modifiedTime: number): void;
  static writeFile(filePath: string, contents: string, options?: IWriteFileOptions): void;
}

// @public
class FileWriter {
  close(): void;
  static open(path: string, flags?: IFileWriterFlags): FileWriter;
  write(text: string): void;
}

// @public
enum FolderConstants {
  Git = ".git",
  NodeModules = "node_modules"
}

// @public
interface IDeleteFileOptions {
  throwIfNotExists?: boolean;
}

// @public
interface IFileWriterFlags {
  append?: boolean;
  exclusive?: boolean;
}

// @public
interface IJsonFileSaveOptions extends IJsonFileStringifyOptions {
  ensureFolder?: boolean;
  onlyIfChanged?: boolean;
}

// @public
interface IJsonFileStringifyOptions {
  unixNewlines?: boolean;
}

// @public
interface IJsonSchemaErrorInfo {
  details: string;
}

// @public
interface IJsonSchemaFromFileOptions {
  dependentSchemas?: JsonSchema[];
}

// @public
interface IJsonSchemaValidateOptions {
  customErrorHeader?: string;
}

// @public
interface IMoveOptions {
  ensureFolder?: boolean;
  overwrite?: boolean;
}

// @public
interface IPackageJson {
  bin?: string;
  dependencies?: IPackageJsonDependencyTable;
  description?: string;
  devDependencies?: IPackageJsonDependencyTable;
  homepage?: string;
  license?: string;
  main?: string;
  name: string;
  optionalDependencies?: IPackageJsonDependencyTable;
  peerDependencies?: IPackageJsonDependencyTable;
  private?: boolean;
  repository?: string;
  scripts?: IPackageJsonScriptTable;
  // @beta
  tsdoc?: IPackageJsonTsdocConfiguration;
  typings?: string;
  version: string;
}

// @public
interface IPackageJsonDependencyTable {
  [dependencyName: string]: string;
}

// @public
interface IPackageJsonLookupParameters {
  loadExtraFields?: boolean;
}

// @public
interface IPackageJsonScriptTable {
  [scriptName: string]: string;
}

// @beta
interface IPackageJsonTsdocConfiguration {
  tsdocFlavor?: string;
}

// @public
interface IParsedPackageName {
  scope: string;
  unscopedName: string;
}

// @public
interface IParsedPackageNameOrError extends IParsedPackageName {
  error: string;
}

// @public
interface IProtectableMapParameters<K, V> {
  onClear?: (source: ProtectableMap<K, V>) => void;
  onDelete?: (source: ProtectableMap<K, V>, key: K) => void;
  onSet?: (source: ProtectableMap<K, V>, key: K, value: V) => V;
}

// @public
interface IReadFileOptions {
  convertLineEndings?: NewlineKind;
  encoding?: Encoding;
}

// @public
interface IReadFolderOptions {
  absolutePath?: boolean;
}

// @public
interface IWriteFileOptions {
  convertLineEndings?: NewlineKind;
  encoding?: Encoding;
  ensureFolder?: boolean;
}

// @public
class JsonFile {
  static load(jsonFilename: string): any;
  static loadAndValidate(jsonFilename: string, jsonSchema: JsonSchema, options?: IJsonSchemaValidateOptions): any;
  static loadAndValidateWithCallback(jsonFilename: string, jsonSchema: JsonSchema, errorCallback: (errorInfo: IJsonSchemaErrorInfo) => void): any;
  static save(jsonObject: Object, jsonFilename: string, options?: IJsonFileSaveOptions): boolean;
  static stringify(jsonObject: Object, options?: IJsonFileStringifyOptions): string;
  static validateNoUndefinedMembers(jsonObject: Object): void;
}

// @public
class JsonSchema {
  ensureCompiled(): void;
  static fromFile(filename: string, options?: IJsonSchemaFromFileOptions): JsonSchema;
  static fromLoadedObject(schemaObject: Object): JsonSchema;
  readonly shortName: string;
  validateObject(jsonObject: Object, filenameForErrors: string, options?: IJsonSchemaValidateOptions): void;
  validateObjectWithCallback(jsonObject: Object, errorCallback: (errorInfo: IJsonSchemaErrorInfo) => void): void;
}

// @public
class LockFile {
  static acquire(resourceDir: string, resourceName: string, maxWaitMs?: number): Promise<LockFile>;
  readonly dirtyWhenAcquired: boolean;
  readonly filePath: string;
  static getLockFilePath(resourceDir: string, resourceName: string, pid?: number): string;
  readonly isReleased: boolean;
  release(): void;
  static tryAcquire(resourceDir: string, resourceName: string): LockFile | undefined;
}

// @public
class MapExtensions {
  static mergeFromMap<K, V>(targetMap: Map<K, V>, sourceMap: Map<K, V>): void;
}

// @public
enum NewlineKind {
  // (undocumented)
  CrLf = 0,
  // (undocumented)
  Lf = 1
}

// @public
class PackageJsonLookup {
  constructor(parameters?: IPackageJsonLookupParameters);
  clearCache(): void;
  loadPackageJson(jsonFilename: string): IPackageJson;
  tryGetPackageFolderFor(fileOrFolderPath: string): string | undefined;
  tryGetPackageJsonFilePathFor(fileOrFolderPath: string): string | undefined;
  tryLoadPackageJsonFor(fileOrFolderPath: string): IPackageJson | undefined;
}

// @public
class PackageName {
  static combineParts(scope: string, unscopedName: string): string;
  static getScope(packageName: string): string;
  static getUnscopedName(packageName: string): string;
  static isValidName(packageName: string): boolean;
  static parse(packageName: string): IParsedPackageName;
  static tryParse(packageName: string): IParsedPackageNameOrError;
  static validate(packageName: string): void;
}

// @public
class Path {
  static isUnder(childPath: string, parentFolderPath: string): boolean;
}

// @public
class ProtectableMap<K, V> {
  constructor(parameters: IProtectableMapParameters<K, V>);
  clear(): void;
  delete(key: K): boolean;
  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  readonly protectedView: Map<K, V>;
  set(key: K, value: V): this;
  readonly size: number;
}

// @public
class Text {
  static convertToCrLf(input: string): string;
  static convertToLf(input: string): string;
  static padEnd(s: string, minimumLength: number): string;
  static replaceAll(input: string, searchValue: string, replaceValue: string): string;
  static truncateWithEllipsis(s: string, maximumLength: number): string;
}

