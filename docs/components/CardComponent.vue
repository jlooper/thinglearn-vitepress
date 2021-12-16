<template>
    
    <article :style="{backgroundColor: color}">
    <a :href="link"><h2>{{title}}</h2>
    <img :src="image" alt="projects">
    </a>
    </article>
    
</template>
<script>
export default {
    props: {
        title: {
            type: String
        },
        color: {
            type: String
        },
        image: {
            type: String
        },
        link: {
            type: String
        }
    },
}
</script>

<style scoped>
h2 {
text-align: center;
border-bottom: none;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
a {
color: white;
cursor: pointer;
}
</style>