webpackJsonp([2],{"0qYM":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("c9ov"),a=i("KlrC"),n=i("VU/8"),r=n(s.a,a.a,!1,null,null,null);e.default=r.exports},"7IMN":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("s8H7"),a=i("GZSx"),n=i("VU/8"),r=n(s.a,a.a,!1,null,null,null);e.default=r.exports},"9WOO":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dn8q"),a=i("p7TW"),n=i("VU/8"),r=n(s.a,a.a,!1,null,null,null);e.default=r.exports},Dn8q:function(t,e,i){"use strict";var s=i("mtWM"),a=i.n(s),n=i("M4fF"),r=i.n(n);e.a={data:function(){return{word1:"",word2:"",word3:"",wordPair:""}},watch:{word1:function(t,e){this.getWordPair()},word2:function(t,e){this.getWordPair()},word3:function(t,e){this.getWordPair()}},methods:{getWordPair:r.a.debounce(function(){var t=this,e={};e.word_1=this.word1,e.word_2=this.word2,e.word_3=this.word3;a.a.get("http://indonesian-word-embedding.herokuapp.com/api/word_pair",{params:e}).then(function(e){t.wordPair=e.data.wordPair}).catch(function(e){t.wordPair="",console.log(e)})},500)}}},Dz1c:function(t,e,i){"use strict";var s=i("mtWM"),a=i.n(s),n=i("M4fF"),r=i.n(n);e.a={data:function(){return{isPublic:!0,word:"",n:"",similarWords:""}},watch:{word:function(t,e){this.getSimilarWords()},n:function(t,e){this.getSimilarWords()}},methods:{getSimilarWords:r.a.debounce(function(){var t=this,e={};e.word=this.word,e.n=this.n;a.a.get("http://indonesian-word-embedding.herokuapp.com/api/similar_word",{params:e}).then(function(e){t.similarWords=e.data.similarWords}).catch(function(e){t.similarWords="",console.log(e)})},500)}}},Emb1:function(t,e){},GZSx:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"level"},[t._m(0),t._v(" "),i("div",{staticClass:"level-item"},[i("b-input",{attrs:{placeholder:"word"},model:{value:t.word,callback:function(e){t.word=e},expression:"word"}})],1),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"level-item"},[i("b-taginput",{attrs:{icon:"label",placeholder:"add a word"},model:{value:t.given,callback:function(e){t.given=e},expression:"given"}})],1),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"level-item"},[t.mostSimilar?i("span",{staticClass:"result"},[t._v(t._s(t.mostSimilar))]):i("span",{staticClass:"empty-field"})])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("The most similar word to")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("given the words")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("is")])])}],n={render:s,staticRenderFns:a};e.a=n},"K+Hg":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"left"}}),t._v(" "),i("h1",{staticClass:"title"},[t._v("Indonesian Word Embedding")]),t._v(" "),i("SimilarWords"),t._v(" "),i("Similarity"),t._v(" "),i("MostSimilarGiven"),t._v(" "),i("WordPair"),t._v(" "),i("DoesntMatch"),t._v(" "),i("Footer")],1)},a=[],n={render:s,staticRenderFns:a};e.a=n},KlrC:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"level"},[t._m(0),t._v(" "),i("div",{staticClass:"level-item"},[i("b-taginput",{attrs:{icon:"label",placeholder:"add a word"},model:{value:t.given,callback:function(e){t.given=e},expression:"given"}})],1),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"level-item"},[t.doesntMatch?i("span",{staticClass:"result"},[t._v(t._s(t.doesntMatch))]):i("span",{staticClass:"empty-field"})])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("The word that does not belong in")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("is")])])}],n={render:s,staticRenderFns:a};e.a=n},M93x:function(t,e,i){"use strict";function s(t){i("Emb1")}var a=i("xJD8"),n=i("K+Hg"),r=i("VU/8"),o=s,l=r(a.a,n.a,!1,o,null,null);e.a=l.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("/5sW"),a=i("MMSg"),n=i.n(a),r=i("doPI"),o=(i.n(r),i("M93x")),l=i("YaEn");s.a.use(n.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:l.a,render:function(t){return t(o.a)}})},TVmP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("UthT"),a=i("jfuQ"),n=i("VU/8"),r=n(s.a,a.a,!1,null,null,null);e.default=r.exports},UthT:function(t,e,i){"use strict";var s=i("mtWM"),a=i.n(s),n=i("M4fF"),r=i.n(n);e.a={data:function(){return{word1:"",word2:"",similarity:""}},watch:{word1:function(t,e){this.getSimilarity()},word2:function(t,e){this.getSimilarity()}},methods:{getSimilarity:r.a.debounce(function(){var t=this,e={};e.word_1=this.word1,e.word_2=this.word2;a.a.get("http://localhost:5000/api/similarity",{params:e}).then(function(e){t.similarity=e.data.similarity}).catch(function(e){t.similarity="",console.log(e)})},500)}}},WpI7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dz1c"),a=i("c05O"),n=i("VU/8"),r=n(s.a,a.a,!1,null,null,null);e.default=r.exports},YaEn:function(t,e,i){"use strict";var s=i("Dd8w"),a=i.n(s),n=i("/5sW"),r=i("/ocq"),o=[{path:"/",component:"Home"},{path:"*",component:"NotFound"}],l=o.map(function(t){return a()({},t,{component:function(){return i("mUJ2")("./"+t.component+".vue")}})});n.a.use(r.a),e.a=new r.a({routes:l,mode:"history"})},c05O:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"level"},[t._m(0),t._v(" "),i("div",{staticClass:"level-item"},[i("b-field",[i("b-select",{attrs:{size:"is-medium"},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}},[i("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),i("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),i("option",{attrs:{value:"20"}},[t._v("20")])])],1)],1),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"level-item"},[i("b-input",{attrs:{placeholder:"word"},model:{value:t.word,callback:function(e){t.word=e},expression:"word"}})],1),t._v(" "),t._m(2)]),t._v(" "),i("ul",t._l(t.similarWords,function(e){return i("li",[i("span",[t._v(t._s(e[0])+" (")]),t._v(" "),i("span",{staticClass:"result"},[t._v(t._s(e[1]))]),t._v(" "),i("span",[t._v(")")])])}))])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("Top")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("most similar words to")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("are")])])}],n={render:s,staticRenderFns:a};e.a=n},c9ov:function(t,e,i){"use strict";var s=i("mtWM"),a=i.n(s),n=i("M4fF"),r=i.n(n);e.a={data:function(){return{word:"",given:[]}},watch:{given:function(t,e){this.getDoesntMatch()}},methods:{getDoesntMatch:r.a.debounce(function(){var t=this,e={};e.given=this.given;a.a.get("http://indonesian-word-embedding.herokuapp.com/api/doesnt_match",{params:e}).then(function(e){t.doesntMatch=e.data.doesntMatch}).catch(function(t){console.log(t)})},500)}}},dfI4:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"level"},[t._m(0),t._v(" "),i("div",{staticClass:"level-item"},[i("b-input",{attrs:{placeholder:"first word"},model:{value:t.word1,callback:function(e){t.word1=e},expression:"word1"}})],1),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"level-item"},[i("b-input",{attrs:{placeholder:"second word"},model:{value:t.word2,callback:function(e){t.word2=e},expression:"word2"}})],1),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"level-item"},[t.similarity?i("span",{staticClass:"result"},[t._v(t._s(t.similarity))]):i("span",{staticClass:"empty-field"})])])]),t._v(" "),i("div",{staticClass:"level"},[i("div",{staticClass:"level-left"},[i("div",{staticClass:"level-item"},[i("b-collapse",{attrs:{open:!1}},[i("button",{staticClass:"button how-it-works",attrs:{slot:"trigger"},slot:"trigger"},[t._v("How does this work?")]),t._v(" "),i("div",{staticClass:"note"},[i("div",{staticClass:"content"},[i("p",[t._v("\n                        To calculate the similarity between two words, we can measure the "),i("strong",[t._v("cosine similarity")]),t._v(" between the vectors representing each of the word."),i("br"),t._v("\n                        The cosine similarity falls is in the range between "),i("strong",[t._v("-1 to 1")]),t._v(". "),i("br"),t._v("\n                        A cosine similarity of 1 means the vectors are identical whereas -1 means the vectors are of opposite directions."),i("br"),t._v("\n                        We can expect relevant words to have a larger cosine similarity value compared to two irrelevant words."),i("br")])])])])],1)])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("The similarity between")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("and")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("is")])])}],n={render:s,staticRenderFns:a};e.a=n},doPI:function(t,e){},jfuQ:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"level"},[i("div",{staticClass:"level-item"},[i("span",[t._v("by "),i("a",{attrs:{href:"http://galuh.me"}},[t._v("Galuh Sahid")]),t._v(". "),i("a",{attrs:{href:"http://github.com/galuhsahid/indonesian-word-embedding"}},[t._v("View source")]),t._v(".")])])])])])}],n={render:s,staticRenderFns:a};e.a=n},mUJ2:function(t,e,i){function s(t){var e=a[t];return e?Promise.all(e.slice(1).map(i.e)).then(function(){return i(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var a={"./DoesntMatch.vue":["0qYM"],"./Footer.vue":["TVmP"],"./MostSimilarGiven.vue":["7IMN"],"./NotFound.vue":["YcJa",0],"./SimilarWords.vue":["WpI7"],"./Similarity.vue":["vgNg"],"./WordPair.vue":["9WOO"]};s.keys=function(){return Object.keys(a)},s.id="mUJ2",t.exports=s},p4AI:function(t,e,i){"use strict";var s=i("mtWM"),a=i.n(s),n=i("M4fF"),r=i.n(n);e.a={data:function(){return{word1:"",word2:"",similarity:""}},watch:{word1:function(t,e){this.getSimilarity()},word2:function(t,e){this.getSimilarity()}},methods:{getSimilarity:r.a.debounce(function(){var t=this,e={};e.word_1=this.word1,e.word_2=this.word2;a.a.get("http://indonesian-word-embedding.herokuapp.com/api/similarity",{params:e}).then(function(e){t.similarity=e.data.similarity}).catch(function(e){t.similarity="",console.log(e)})},500)}}},p7TW:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"level"},[i("div",{staticClass:"level-item"},[i("b-input",{attrs:{placeholder:"first word"},model:{value:t.word1,callback:function(e){t.word1=e},expression:"word1"}})],1),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"level-item"},[i("b-input",{attrs:{placeholder:"second word"},model:{value:t.word2,callback:function(e){t.word2=e},expression:"word2"}})],1),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"level-item"},[i("b-input",{attrs:{placeholder:"third word"},model:{value:t.word3,callback:function(e){t.word3=e},expression:"word3"}})],1),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"level-item"},[t.wordPair?i("span",{staticClass:"result"},[t._v(t._s(t.wordPair))]):i("span",{staticClass:"empty-field"})])]),t._v(" "),i("div",{staticClass:"level"},[i("div",{staticClass:"level-left"},[i("div",{staticClass:"level-item"},[i("b-collapse",{attrs:{open:!1}},[i("button",{staticClass:"button how-it-works",attrs:{slot:"trigger"},slot:"trigger"},[t._v("How does this work?")]),t._v(" "),i("div",{staticClass:"note"},[i("div",{staticClass:"content"},[i("p",[t._v("\n                          In word embeddings, we can figure out analogies through the difference between word vectors. "),i("br"),t._v("\n                          The most famous one is probably the "),i("strong",[t._v("king - man + woman = queen")]),t._v(" analogy, which is another way to express that "),i("strong",[t._v("king is to man like queen is to woman")]),t._v(". "),i("br"),t._v("\n                          There are plenty examples as well, such as "),i("strong",[t._v("France - Paris")]),t._v(" and "),i("strong",[t._v("Japan - Tokyo")]),t._v("."),i("br"),t._v("\n                          However, this depends on the quality of the word embedding trained; it may not work particularly well on certain data.\n                      ")])])])])],1)])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("is to")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("like")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level-item"},[i("span",[t._v("is to")])])}],n={render:s,staticRenderFns:a};e.a=n},s8H7:function(t,e,i){"use strict";var s=i("mtWM"),a=i.n(s),n=i("M4fF"),r=i.n(n);e.a={data:function(){return{word:"",given:[]}},watch:{word:function(t,e){this.getMostSimilar()},given:function(t,e){this.getMostSimilar()}},methods:{getMostSimilar:r.a.debounce(function(){var t=this,e={};e.word=this.word,e.given=this.given;a.a.get("http://indonesian-word-embedding.herokuapp.com/api/similar_to_given",{params:e}).then(function(e){t.mostSimilar=e.data.mostSimilar}).catch(function(e){t.mostSimilar="",console.log(e)})},500)}}},vgNg:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("p4AI"),a=i("dfI4"),n=i("VU/8"),r=n(s.a,a.a,!1,null,null,null);e.default=r.exports},xJD8:function(t,e,i){"use strict";var s=i("0qYM"),a=i("7IMN"),n=i("vgNg"),r=i("WpI7"),o=i("9WOO"),l=i("TVmP");e.a={name:"app",components:{DoesntMatch:s.default,MostSimilarGiven:a.default,Similarity:n.default,SimilarWords:r.default,WordPair:o.default,Footer:l.default}}}},["NHnr"]);
//# sourceMappingURL=app.3d74719110ce005664c6.js.map