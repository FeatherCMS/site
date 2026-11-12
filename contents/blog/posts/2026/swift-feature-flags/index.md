---
type: post
title: "Demystifying Swift feature flags"
description: "Discover how to enable experimental and upcoming features in the Swift compiler and explore new language capabilities."
publication: "2026-09-25 09:00:00"
tags: 
    - swift
authors:
    - tibor-bodecs
featured: true
---


Starting from Swift 5.8 developers can enable upcoming and experimental feature flags using the compiler or via Swift Package Manager. In this article I'd like to explain a few new feature flags for Swift 6. 

There's a great article on swift.org about [using feature flags](https://www.swift.org/blog/using-upcoming-feature-flags/), also explaining the reasons why feature flags were introduced and how the team come up with a generalized solution thats scales. 

The article suggests that you should browse the [Swift evolution dashboard](https://www.swift.org/swift-evolution/) for feature flags, but sometimes those docs are not representing reality. So how do I discover feature flags? 🤔

Well, there's a command for this:

```sh
swiftc -print-supported-features
```

This will print both experimental and upcoming features that are compatible with your version of swift. for example In my case (Swift 6.4 on macOS):

```json
{
  "features": {
    "optional": [
      { "name": "StrictMemorySafety", "migratable": true, "categories": ["StrictMemorySafety"], "flag_name": "-strict-memory-safety" },
      { "name": "LibraryEvolution", "flag_name": "-enable-library-evolution" }
    ],
    "upcoming": [
      { "name": "ConciseMagicFile", "enabled_in": "6" },
      { "name": "ForwardTrailingClosures", "enabled_in": "6" },
      { "name": "StrictConcurrency", "enabled_in": "6" },
      { "name": "BareSlashRegexLiterals", "enabled_in": "6" },
      { "name": "DeprecateApplicationMain", "enabled_in": "6" },
      { "name": "ImportObjcForwardDeclarations", "enabled_in": "6" },
      { "name": "DisableOutwardActorInference", "enabled_in": "6" },
      { "name": "IsolatedDefaultValues", "enabled_in": "6" },
      { "name": "GlobalConcurrency", "enabled_in": "6" },
      { "name": "InferSendableFromCaptures", "enabled_in": "6" },
      { "name": "ImplicitOpenExistentials", "enabled_in": "6" },
      { "name": "RegionBasedIsolation", "enabled_in": "6" },
      { "name": "DynamicActorIsolation", "enabled_in": "6" },
      { "name": "NonfrozenEnumExhaustivity", "enabled_in": "6" },
      { "name": "GlobalActorIsolatedTypesUsability", "enabled_in": "6" },
      { "name": "ExistentialAny", "migratable": true, "categories": ["ExistentialAny"], "enabled_in": "7" },
      { "name": "InternalImportsByDefault", "enabled_in": "7" },
      { "name": "MemberImportVisibility", "migratable": true, "categories": ["MemberImportVisibility"], "enabled_in": "7" },
      { "name": "InferIsolatedConformances", "migratable": true, "categories": ["IsolatedConformances"], "enabled_in": "7" },
      { "name": "NonisolatedNonsendingByDefault", "migratable": true, "categories": ["NonisolatedNonsendingByDefault"], "enabled_in": "7" },
      { "name": "ImmutableWeakCaptures", "enabled_in": "7" }
    ],
    "experimental": [
      { "name": "MacrosOnImports" },
      { "name": "DeferredCodeGen" },
      { "name": "MoveOnlyClasses" },
      { "name": "NoImplicitCopy" },
      { "name": "OldOwnershipOperatorSpellings" },
      { "name": "MoveOnlyEnumDeinits" },
      { "name": "MoveOnlyTuples" },
      { "name": "MoveOnlyPartialReinitialization" },
      { "name": "ConsumeSelfInDeinit" },
      { "name": "AccessLevelOnImport" },
      { "name": "NoExplicitNonIsolated" },
      { "name": "LayoutStringValueWitnesses" },
      { "name": "LayoutStringValueWitnessesInstantiation" },
      { "name": "OpaqueTypeErasure" },
      { "name": "ReferenceBindings" },
      { "name": "BuiltinModule" },
      { "name": "PlaygroundExtendedCallbacks" },
      { "name": "RawLayout" },
      { "name": "Embedded" },
      { "name": "Volatile" },
      { "name": "SuppressedAssociatedTypes" },
      { "name": "StructLetDestructuring" },
      { "name": "LifetimeDependence" },
      { "name": "StaticExclusiveOnly" },
      { "name": "ManualOwnership" },
      { "name": "ClosureIsolation" },
      { "name": "ObjCImplementationWithResilientStorage" },
      { "name": "Sensitive" },
      { "name": "DebugDescriptionMacro" },
      { "name": "Extern" },
      { "name": "SafeInteropWrappers" },
      { "name": "SafeInteropWrappersNullAsEmptySpan" },
      { "name": "AssumeResilientCxxTypes" },
      { "name": "ImportNonPublicCxxMembers" },
      { "name": "ImportCxxMembersLazily" },
      { "name": "CoroutineAccessors" },
      { "name": "AddressableParameters" },
      { "name": "AddressableTypes" },
      { "name": "CustomAvailability" },
      { "name": "ConcurrencySyntaxSugar" },
      { "name": "CompileTimeValues" },
      { "name": "LiteralExpressions" },
      { "name": "ClosureBodyMacro" },
      { "name": "AllowRuntimeSymbolDeclarations" },
      { "name": "Lifetimes" },
      { "name": "PreInverseGenericsExcept" },
      { "name": "ImportMacroAliases" },
      { "name": "SwiftRuntimeAvailability" },
      { "name": "StandaloneSwiftAvailability" },
      { "name": "EmbeddedDynamicExclusivity" },
      { "name": "TypedAllocation" },
      { "name": "CheckImplementationOnly" },
      { "name": "EnforceSPIOperatorGroup" },
      { "name": "Reparenting" },
      { "name": "UnderscoreOwned" },
      { "name": "StrictAccessControl" }
    ]
  }
}
```

This means that we can enable these features via a feature flag or a swift settings for swift packages.

```swift
protocol Describable {
    var description: String { get }
}

struct User: Describable {
    let name: String

    var description: String {
        "User: \(name)"
    }
}

let values: [Describable] = [
    User(name: "Ada"),
    User(name: "Grace")
]

for value in values {
    print(value.description)
}
```

```sh
swiftc -enable-upcoming-feature ExistentialAny main.swift 
```

If you run the compiler without the upcoming feture it'll compile the source without warnings, but if you add the enable upcoming feature flag it'll emit a warning about the missing `any` keyword in the values array line. 🤨

```swift
let values: [any Describable] = [/*..*/]
```

You can modify our sorce code and add `any` before the `Describable` type to avoid this warnings. If you run `swiftc main.swift` it'll run just fine, but this way you can prepare for this upcoming feature and it before it's going to be enabled in a future Swift version. This is why upcoming feature flags are useful. We can do the same in a Swift package by defining swift settings for a given target. 

```swift
// swift-tools-version:6.3
import PackageDescription

let swiftSettings: [SwiftSetting] = [
    .enableUpcomingFeature("ExistentialAny"),
]

let package = Package(
    name: "application",
    platforms: [
        .macOS(.v15),
        .iOS(.v18),
        .tvOS(.v18),
        .watchOS(.v11),
        .visionOS(.v2),
    ],
    products: [
        .executable(name: "Example", targets: ["Example"]),
    ],
    dependencies: [
        
    ],
    targets: [
        .executableTarget(
            name: "Example",
            dependencies: [
                
            ],
            swiftSettings: swiftSettings
        ),
    ]
)
```

It's important to notice that you can set flags on a target basis. Yesterday I encountered an [issue](https://github.com/apple/swift-openapi-generator/issues/946) with swift-openapi-generator, and instead of using flags, I patched the generated Swift files, but seems like it was compltely unnecessary, i could have disabled strict memory safety and unused import access feature for that target. Anyway, this was the reason why i wrote this article, so yeah, learning new things day-by-day. 😅

Let me show you one more example, this time an experimental feature. 

```swift
import Swift

protocol Producer<Value>: ~Copyable {
    associatedtype Value
    func make() -> Value
}

struct Token: ~Copyable {
    let value: Int
}

struct TokenProducer: ~Copyable, Producer {
    func make() -> Token {
        Token(value: 42)
    }
}
```

```sh
swiftc main.swift
```


```swift
import Swift

protocol Producer<Value>: ~Copyable {
    associatedtype Value: ~Copyable
    func make() -> Value
}

struct Token: ~Copyable {
    let value: Int
}

struct TokenProducer: ~Copyable, Producer {
    func make() -> Token {
        Token(value: 42)
    }
}
```

```sh
swiftc main.swift
```









