<template>
    <div class="turned">
        <div class="purple text-center p-5">
            <div style="max-width: 800px" class="mx-auto">
                <h1 style="font-size: 30px;"><b>{{ Title }}</b></h1>
                <p>{{ Content }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        Title: String,
        Content: String
    }
}
</script>


<style>
.turned{
    background-color: #93138A;
    transform: skewY(-2.55deg);
    width: 100%;
    margin-bottom: 3em;
}
.purple{
    background-color: #663366;
    transform: skewY(2.55deg);
    color: white;
    width: 100%;
}
</style>
