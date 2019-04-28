<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor](./api-extractor.md) &gt; [IExtractorInvokeOptions](./api-extractor.iextractorinvokeoptions.md)

## IExtractorInvokeOptions interface

Runtime options for Extractor.

<b>Signature:</b>

```typescript
export interface IExtractorInvokeOptions 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [compilerState](./api-extractor.iextractorinvokeoptions.compilerstate.md) | <code>CompilerState</code> | An optional TypeScript compiler state. This allows an optimization where multiple invocations of API Extractor can reuse the same TypeScript compiler analysis. |
|  [localBuild](./api-extractor.iextractorinvokeoptions.localbuild.md) | <code>boolean</code> | Indicates that API Extractor is running as part of a local build, e.g. on developer's machine. This disables certain validation that would normally be performed for a ship/production build. For example, the \*.api.md report file is automatically updated in a local build.<!-- -->The default value is false. |
|  [messageCallback](./api-extractor.iextractorinvokeoptions.messagecallback.md) | <code>(message: ExtractorMessage) =&gt; void</code> | An optional callback function that will be called for each <code>ExtractorMessage</code> before it is displayed by API Extractor. The callback can customize the message, handle it, or discard it. |
|  [showVerboseMessages](./api-extractor.iextractorinvokeoptions.showverbosemessages.md) | <code>boolean</code> | If true, API Extractor will include [ExtractorLogLevel.Verbose](./api-extractor.extractorloglevel.verbose.md) messages in its output. |
|  [typescriptCompilerFolder](./api-extractor.iextractorinvokeoptions.typescriptcompilerfolder.md) | <code>string</code> | By default API Extractor uses its own TypeScript compiler version to analyze your project. This can often cause compiler errors due to incompatibilities between different TS versions. Use this option to specify the folder path for your compiler version. |
