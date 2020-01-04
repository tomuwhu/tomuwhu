<template>
    <div>
        {{ t }}
    </div>
</template>

<script>
var n = 5
export default {
    data() {
        return {
            t: Array(2*n+1).fill(0).map( () => Array(2*n+1).fill(0)) 
        }
    }
}
</script>>

<>