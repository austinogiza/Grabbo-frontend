"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/supports-color";
exports.ids = ["vendor-chunks/supports-color"];
exports.modules = {

/***/ "(ssr)/./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst os = __webpack_require__(/*! os */ \"os\");\nconst tty = __webpack_require__(/*! tty */ \"tty\");\nconst hasFlag = __webpack_require__(/*! has-flag */ \"(ssr)/./node_modules/has-flag/index.js\");\nconst { env } = process;\nlet flagForceColor;\nif (hasFlag(\"no-color\") || hasFlag(\"no-colors\") || hasFlag(\"color=false\") || hasFlag(\"color=never\")) {\n    flagForceColor = 0;\n} else if (hasFlag(\"color\") || hasFlag(\"colors\") || hasFlag(\"color=true\") || hasFlag(\"color=always\")) {\n    flagForceColor = 1;\n}\nfunction envForceColor() {\n    if (\"FORCE_COLOR\" in env) {\n        if (env.FORCE_COLOR === \"true\") {\n            return 1;\n        }\n        if (env.FORCE_COLOR === \"false\") {\n            return 0;\n        }\n        return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);\n    }\n}\nfunction translateLevel(level) {\n    if (level === 0) {\n        return false;\n    }\n    return {\n        level,\n        hasBasic: true,\n        has256: level >= 2,\n        has16m: level >= 3\n    };\n}\nfunction supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {\n    const noFlagForceColor = envForceColor();\n    if (noFlagForceColor !== undefined) {\n        flagForceColor = noFlagForceColor;\n    }\n    const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;\n    if (forceColor === 0) {\n        return 0;\n    }\n    if (sniffFlags) {\n        if (hasFlag(\"color=16m\") || hasFlag(\"color=full\") || hasFlag(\"color=truecolor\")) {\n            return 3;\n        }\n        if (hasFlag(\"color=256\")) {\n            return 2;\n        }\n    }\n    if (haveStream && !streamIsTTY && forceColor === undefined) {\n        return 0;\n    }\n    const min = forceColor || 0;\n    if (env.TERM === \"dumb\") {\n        return min;\n    }\n    if (process.platform === \"win32\") {\n        // Windows 10 build 10586 is the first Windows release that supports 256 colors.\n        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.\n        const osRelease = os.release().split(\".\");\n        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {\n            return Number(osRelease[2]) >= 14931 ? 3 : 2;\n        }\n        return 1;\n    }\n    if (\"CI\" in env) {\n        if ([\n            \"TRAVIS\",\n            \"CIRCLECI\",\n            \"APPVEYOR\",\n            \"GITLAB_CI\",\n            \"GITHUB_ACTIONS\",\n            \"BUILDKITE\",\n            \"DRONE\"\n        ].some((sign)=>sign in env) || env.CI_NAME === \"codeship\") {\n            return 1;\n        }\n        return min;\n    }\n    if (\"TEAMCITY_VERSION\" in env) {\n        return /^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;\n    }\n    if (env.COLORTERM === \"truecolor\") {\n        return 3;\n    }\n    if (\"TERM_PROGRAM\" in env) {\n        const version = Number.parseInt((env.TERM_PROGRAM_VERSION || \"\").split(\".\")[0], 10);\n        switch(env.TERM_PROGRAM){\n            case \"iTerm.app\":\n                return version >= 3 ? 3 : 2;\n            case \"Apple_Terminal\":\n                return 2;\n        }\n    }\n    if (/-256(color)?$/i.test(env.TERM)) {\n        return 2;\n    }\n    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\n        return 1;\n    }\n    if (\"COLORTERM\" in env) {\n        return 1;\n    }\n    return min;\n}\nfunction getSupportLevel(stream, options = {}) {\n    const level = supportsColor(stream, {\n        streamIsTTY: stream && stream.isTTY,\n        ...options\n    });\n    return translateLevel(level);\n}\nmodule.exports = {\n    supportsColor: getSupportLevel,\n    stdout: getSupportLevel({\n        isTTY: tty.isatty(1)\n    }),\n    stderr: getSupportLevel({\n        isTTY: tty.isatty(2)\n    })\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLQyxtQkFBT0EsQ0FBQztBQUNuQixNQUFNQyxNQUFNRCxtQkFBT0EsQ0FBQztBQUNwQixNQUFNRSxVQUFVRixtQkFBT0EsQ0FBQztBQUV4QixNQUFNLEVBQUNHLEdBQUcsRUFBQyxHQUFHQztBQUVkLElBQUlDO0FBQ0osSUFBSUgsUUFBUSxlQUNYQSxRQUFRLGdCQUNSQSxRQUFRLGtCQUNSQSxRQUFRLGdCQUFnQjtJQUN4QkcsaUJBQWlCO0FBQ2xCLE9BQU8sSUFBSUgsUUFBUSxZQUNsQkEsUUFBUSxhQUNSQSxRQUFRLGlCQUNSQSxRQUFRLGlCQUFpQjtJQUN6QkcsaUJBQWlCO0FBQ2xCO0FBRUEsU0FBU0M7SUFDUixJQUFJLGlCQUFpQkgsS0FBSztRQUN6QixJQUFJQSxJQUFJSSxXQUFXLEtBQUssUUFBUTtZQUMvQixPQUFPO1FBQ1I7UUFFQSxJQUFJSixJQUFJSSxXQUFXLEtBQUssU0FBUztZQUNoQyxPQUFPO1FBQ1I7UUFFQSxPQUFPSixJQUFJSSxXQUFXLENBQUNDLE1BQU0sS0FBSyxJQUFJLElBQUlDLEtBQUtDLEdBQUcsQ0FBQ0MsT0FBT0MsUUFBUSxDQUFDVCxJQUFJSSxXQUFXLEVBQUUsS0FBSztJQUMxRjtBQUNEO0FBRUEsU0FBU00sZUFBZUMsS0FBSztJQUM1QixJQUFJQSxVQUFVLEdBQUc7UUFDaEIsT0FBTztJQUNSO0lBRUEsT0FBTztRQUNOQTtRQUNBQyxVQUFVO1FBQ1ZDLFFBQVFGLFNBQVM7UUFDakJHLFFBQVFILFNBQVM7SUFDbEI7QUFDRDtBQUVBLFNBQVNJLGNBQWNDLFVBQVUsRUFBRSxFQUFDQyxXQUFXLEVBQUVDLGFBQWEsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLE1BQU1DLG1CQUFtQmhCO0lBQ3pCLElBQUlnQixxQkFBcUJDLFdBQVc7UUFDbkNsQixpQkFBaUJpQjtJQUNsQjtJQUVBLE1BQU1FLGFBQWFILGFBQWFoQixpQkFBaUJpQjtJQUVqRCxJQUFJRSxlQUFlLEdBQUc7UUFDckIsT0FBTztJQUNSO0lBRUEsSUFBSUgsWUFBWTtRQUNmLElBQUluQixRQUFRLGdCQUNYQSxRQUFRLGlCQUNSQSxRQUFRLG9CQUFvQjtZQUM1QixPQUFPO1FBQ1I7UUFFQSxJQUFJQSxRQUFRLGNBQWM7WUFDekIsT0FBTztRQUNSO0lBQ0Q7SUFFQSxJQUFJaUIsY0FBYyxDQUFDQyxlQUFlSSxlQUFlRCxXQUFXO1FBQzNELE9BQU87SUFDUjtJQUVBLE1BQU1iLE1BQU1jLGNBQWM7SUFFMUIsSUFBSXJCLElBQUlzQixJQUFJLEtBQUssUUFBUTtRQUN4QixPQUFPZjtJQUNSO0lBRUEsSUFBSU4sUUFBUXNCLFFBQVEsS0FBSyxTQUFTO1FBQ2pDLGdGQUFnRjtRQUNoRiwyRUFBMkU7UUFDM0UsTUFBTUMsWUFBWTVCLEdBQUc2QixPQUFPLEdBQUdDLEtBQUssQ0FBQztRQUNyQyxJQUNDbEIsT0FBT2dCLFNBQVMsQ0FBQyxFQUFFLEtBQUssTUFDeEJoQixPQUFPZ0IsU0FBUyxDQUFDLEVBQUUsS0FBSyxPQUN2QjtZQUNELE9BQU9oQixPQUFPZ0IsU0FBUyxDQUFDLEVBQUUsS0FBSyxRQUFRLElBQUk7UUFDNUM7UUFFQSxPQUFPO0lBQ1I7SUFFQSxJQUFJLFFBQVF4QixLQUFLO1FBQ2hCLElBQUk7WUFBQztZQUFVO1lBQVk7WUFBWTtZQUFhO1lBQWtCO1lBQWE7U0FBUSxDQUFDMkIsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxRQUFRNUIsUUFBUUEsSUFBSTZCLE9BQU8sS0FBSyxZQUFZO1lBQ3BKLE9BQU87UUFDUjtRQUVBLE9BQU90QjtJQUNSO0lBRUEsSUFBSSxzQkFBc0JQLEtBQUs7UUFDOUIsT0FBTyxnQ0FBZ0M4QixJQUFJLENBQUM5QixJQUFJK0IsZ0JBQWdCLElBQUksSUFBSTtJQUN6RTtJQUVBLElBQUkvQixJQUFJZ0MsU0FBUyxLQUFLLGFBQWE7UUFDbEMsT0FBTztJQUNSO0lBRUEsSUFBSSxrQkFBa0JoQyxLQUFLO1FBQzFCLE1BQU1pQyxVQUFVekIsT0FBT0MsUUFBUSxDQUFDLENBQUNULElBQUlrQyxvQkFBb0IsSUFBSSxFQUFDLEVBQUdSLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1FBRWhGLE9BQVExQixJQUFJbUMsWUFBWTtZQUN2QixLQUFLO2dCQUNKLE9BQU9GLFdBQVcsSUFBSSxJQUFJO1lBQzNCLEtBQUs7Z0JBQ0osT0FBTztRQUVUO0lBQ0Q7SUFFQSxJQUFJLGlCQUFpQkgsSUFBSSxDQUFDOUIsSUFBSXNCLElBQUksR0FBRztRQUNwQyxPQUFPO0lBQ1I7SUFFQSxJQUFJLDhEQUE4RFEsSUFBSSxDQUFDOUIsSUFBSXNCLElBQUksR0FBRztRQUNqRixPQUFPO0lBQ1I7SUFFQSxJQUFJLGVBQWV0QixLQUFLO1FBQ3ZCLE9BQU87SUFDUjtJQUVBLE9BQU9PO0FBQ1I7QUFFQSxTQUFTNkIsZ0JBQWdCQyxNQUFNLEVBQUVDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLE1BQU0zQixRQUFRSSxjQUFjc0IsUUFBUTtRQUNuQ3BCLGFBQWFvQixVQUFVQSxPQUFPRSxLQUFLO1FBQ25DLEdBQUdELE9BQU87SUFDWDtJQUVBLE9BQU81QixlQUFlQztBQUN2QjtBQUVBNkIsT0FBT0MsT0FBTyxHQUFHO0lBQ2hCMUIsZUFBZXFCO0lBQ2ZNLFFBQVFOLGdCQUFnQjtRQUFDRyxPQUFPekMsSUFBSTZDLE1BQU0sQ0FBQztJQUFFO0lBQzdDQyxRQUFRUixnQkFBZ0I7UUFBQ0csT0FBT3pDLElBQUk2QyxNQUFNLENBQUM7SUFBRTtBQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWJiby8uL25vZGVfbW9kdWxlcy9zdXBwb3J0cy1jb2xvci9pbmRleC5qcz83YmI5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xuY29uc3QgaGFzRmxhZyA9IHJlcXVpcmUoJ2hhcy1mbGFnJyk7XG5cbmNvbnN0IHtlbnZ9ID0gcHJvY2VzcztcblxubGV0IGZsYWdGb3JjZUNvbG9yO1xuaWYgKGhhc0ZsYWcoJ25vLWNvbG9yJykgfHxcblx0aGFzRmxhZygnbm8tY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9ZmFsc2UnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1uZXZlcicpKSB7XG5cdGZsYWdGb3JjZUNvbG9yID0gMDtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fFxuXHRoYXNGbGFnKCdjb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcblx0aGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcblx0ZmxhZ0ZvcmNlQ29sb3IgPSAxO1xufVxuXG5mdW5jdGlvbiBlbnZGb3JjZUNvbG9yKCkge1xuXHRpZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcblx0XHRpZiAoZW52LkZPUkNFX0NPTE9SID09PSAndHJ1ZScpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdGlmIChlbnYuRk9SQ0VfQ09MT1IgPT09ICdmYWxzZScpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnYuRk9SQ0VfQ09MT1IubGVuZ3RoID09PSAwID8gMSA6IE1hdGgubWluKE51bWJlci5wYXJzZUludChlbnYuRk9SQ0VfQ09MT1IsIDEwKSwgMyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcblx0aWYgKGxldmVsID09PSAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRsZXZlbCxcblx0XHRoYXNCYXNpYzogdHJ1ZSxcblx0XHRoYXMyNTY6IGxldmVsID49IDIsXG5cdFx0aGFzMTZtOiBsZXZlbCA+PSAzXG5cdH07XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ29sb3IoaGF2ZVN0cmVhbSwge3N0cmVhbUlzVFRZLCBzbmlmZkZsYWdzID0gdHJ1ZX0gPSB7fSkge1xuXHRjb25zdCBub0ZsYWdGb3JjZUNvbG9yID0gZW52Rm9yY2VDb2xvcigpO1xuXHRpZiAobm9GbGFnRm9yY2VDb2xvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0ZmxhZ0ZvcmNlQ29sb3IgPSBub0ZsYWdGb3JjZUNvbG9yO1xuXHR9XG5cblx0Y29uc3QgZm9yY2VDb2xvciA9IHNuaWZmRmxhZ3MgPyBmbGFnRm9yY2VDb2xvciA6IG5vRmxhZ0ZvcmNlQ29sb3I7XG5cblx0aWYgKGZvcmNlQ29sb3IgPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGlmIChzbmlmZkZsYWdzKSB7XG5cdFx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTE2bScpIHx8XG5cdFx0XHRoYXNGbGFnKCdjb2xvcj1mdWxsJykgfHxcblx0XHRcdGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG5cdFx0XHRyZXR1cm4gMztcblx0XHR9XG5cblx0XHRpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcblx0XHRcdHJldHVybiAyO1xuXHRcdH1cblx0fVxuXG5cdGlmIChoYXZlU3RyZWFtICYmICFzdHJlYW1Jc1RUWSAmJiBmb3JjZUNvbG9yID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IG1pbiA9IGZvcmNlQ29sb3IgfHwgMDtcblxuXHRpZiAoZW52LlRFUk0gPT09ICdkdW1iJykge1xuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuXHRcdC8vIFdpbmRvd3MgMTAgYnVpbGQgMTA1ODYgaXMgdGhlIGZpcnN0IFdpbmRvd3MgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDI1NiBjb2xvcnMuXG5cdFx0Ly8gV2luZG93cyAxMCBidWlsZCAxNDkzMSBpcyB0aGUgZmlyc3QgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDE2bS9UcnVlQ29sb3IuXG5cdFx0Y29uc3Qgb3NSZWxlYXNlID0gb3MucmVsZWFzZSgpLnNwbGl0KCcuJyk7XG5cdFx0aWYgKFxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ0knIGluIGVudikge1xuXHRcdGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knLCAnR0lUSFVCX0FDVElPTlMnLCAnQlVJTERLSVRFJywgJ0RST05FJ10uc29tZShzaWduID0+IHNpZ24gaW4gZW52KSB8fCBlbnYuQ0lfTkFNRSA9PT0gJ2NvZGVzaGlwJykge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmICgnVEVBTUNJVFlfVkVSU0lPTicgaW4gZW52KSB7XG5cdFx0cmV0dXJuIC9eKDlcXC4oMCpbMS05XVxcZCopXFwufFxcZHsyLH1cXC4pLy50ZXN0KGVudi5URUFNQ0lUWV9WRVJTSU9OKSA/IDEgOiAwO1xuXHR9XG5cblx0aWYgKGVudi5DT0xPUlRFUk0gPT09ICd0cnVlY29sb3InKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoJ1RFUk1fUFJPR1JBTScgaW4gZW52KSB7XG5cdFx0Y29uc3QgdmVyc2lvbiA9IE51bWJlci5wYXJzZUludCgoZW52LlRFUk1fUFJPR1JBTV9WRVJTSU9OIHx8ICcnKS5zcGxpdCgnLicpWzBdLCAxMCk7XG5cblx0XHRzd2l0Y2ggKGVudi5URVJNX1BST0dSQU0pIHtcblx0XHRcdGNhc2UgJ2lUZXJtLmFwcCc6XG5cdFx0XHRcdHJldHVybiB2ZXJzaW9uID49IDMgPyAzIDogMjtcblx0XHRcdGNhc2UgJ0FwcGxlX1Rlcm1pbmFsJzpcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHQvLyBObyBkZWZhdWx0XG5cdFx0fVxuXHR9XG5cblx0aWYgKC8tMjU2KGNvbG9yKT8kL2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmICgvXnNjcmVlbnxeeHRlcm18XnZ0MTAwfF52dDIyMHxecnh2dHxjb2xvcnxhbnNpfGN5Z3dpbnxsaW51eC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NPTE9SVEVSTScgaW4gZW52KSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRyZXR1cm4gbWluO1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0TGV2ZWwoc3RyZWFtLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3QgbGV2ZWwgPSBzdXBwb3J0c0NvbG9yKHN0cmVhbSwge1xuXHRcdHN0cmVhbUlzVFRZOiBzdHJlYW0gJiYgc3RyZWFtLmlzVFRZLFxuXHRcdC4uLm9wdGlvbnNcblx0fSk7XG5cblx0cmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcblx0c3Rkb3V0OiBnZXRTdXBwb3J0TGV2ZWwoe2lzVFRZOiB0dHkuaXNhdHR5KDEpfSksXG5cdHN0ZGVycjogZ2V0U3VwcG9ydExldmVsKHtpc1RUWTogdHR5LmlzYXR0eSgyKX0pXG59O1xuIl0sIm5hbWVzIjpbIm9zIiwicmVxdWlyZSIsInR0eSIsImhhc0ZsYWciLCJlbnYiLCJwcm9jZXNzIiwiZmxhZ0ZvcmNlQ29sb3IiLCJlbnZGb3JjZUNvbG9yIiwiRk9SQ0VfQ09MT1IiLCJsZW5ndGgiLCJNYXRoIiwibWluIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJ0cmFuc2xhdGVMZXZlbCIsImxldmVsIiwiaGFzQmFzaWMiLCJoYXMyNTYiLCJoYXMxNm0iLCJzdXBwb3J0c0NvbG9yIiwiaGF2ZVN0cmVhbSIsInN0cmVhbUlzVFRZIiwic25pZmZGbGFncyIsIm5vRmxhZ0ZvcmNlQ29sb3IiLCJ1bmRlZmluZWQiLCJmb3JjZUNvbG9yIiwiVEVSTSIsInBsYXRmb3JtIiwib3NSZWxlYXNlIiwicmVsZWFzZSIsInNwbGl0Iiwic29tZSIsInNpZ24iLCJDSV9OQU1FIiwidGVzdCIsIlRFQU1DSVRZX1ZFUlNJT04iLCJDT0xPUlRFUk0iLCJ2ZXJzaW9uIiwiVEVSTV9QUk9HUkFNX1ZFUlNJT04iLCJURVJNX1BST0dSQU0iLCJnZXRTdXBwb3J0TGV2ZWwiLCJzdHJlYW0iLCJvcHRpb25zIiwiaXNUVFkiLCJtb2R1bGUiLCJleHBvcnRzIiwic3Rkb3V0IiwiaXNhdHR5Iiwic3RkZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/supports-color/index.js\n");

/***/ })

};
;