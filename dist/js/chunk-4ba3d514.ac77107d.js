(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ba3d514"],{"22e7":function(t,e,i){"use strict";i("f997")},d879:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"create"},[i("h1",[t._v("Opret et ønske 🎁 ")]),i("form",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.post.description,expression:"post.description"}],attrs:{type:"text",placeholder:"Produktets navn..",required:""},domProps:{value:t.post.description},on:{input:function(e){e.target.composing||t.$set(t.post,"description",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.post.link,expression:"post.link"}],attrs:{type:"text",placeholder:"Skriv link til ønske..",required:""},domProps:{value:t.post.link},on:{input:function(e){e.target.composing||t.$set(t.post,"link",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.post.butik,expression:"post.butik"}],attrs:{type:"text",placeholder:"Skriv butikkens navn..",required:""},domProps:{value:t.post.butik},on:{input:function(e){e.target.composing||t.$set(t.post,"butik",e.target.value)}}}),i("input",{ref:"fileInput",attrs:{type:"file",accept:"image/*"},on:{change:t.previewImage}}),i("button",{staticClass:"choose-image",attrs:{type:"button"},on:{click:t.triggerChooseImg}},[t._v(" Vælg ønske ")]),i("div",[i("img",{staticClass:"image-preview",attrs:{src:t.post.image}})]),i("button",{attrs:{type:"button"},on:{click:t.createPost}},[t._v("Tilføj nu..")])])])},n=[],o=i("2ddf"),a={name:"Create",data:function(){return{post:{description:"",image:null}}},methods:{triggerChooseImg:function(){this.$refs.fileInput.click()},previewImage:function(){var t=this,e=this.$refs.fileInput.files[0],i=new FileReader;i.onload=function(e){t.post.image=e.target.result},i.readAsDataURL(e)},createPost:function(){o["a"].add(this.post),this.$router.push("/")}}},r=a,p=(i("22e7"),i("2877")),u=Object(p["a"])(r,s,n,!1,null,"6ab71e9e",null);e["default"]=u.exports},f997:function(t,e,i){}}]);
//# sourceMappingURL=chunk-4ba3d514.ac77107d.js.map