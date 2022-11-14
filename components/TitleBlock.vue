<template>
    <div class="turned">
        <div class="purple text-center p-5">
            <div class="mx-auto">
                <h1 style="font-size: 30px;" class="portico"><b>{{ Title }}</b></h1>
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
    margin-bottom: 3em !important;
    margin-top: 0 !important;
    z-index: 34;
}
.purple{
    background-color: #663366;
    transform: skewY(2.55deg);
    color: white;
    width: 100%;
}
</style>
