<template>
  <section
    id="community"
    class="py-12"
  >
    <hr />
    <div class="container py-8 sm:py-10">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <!-- Imagen agregada aquí -->
            <div class="mb-6">
              <img
                src="/imagenesTeam/cs.jpg"
                alt="CLASYPCS Community"
                class="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <Instagram
                class="w-20 h-20 m-auto mb-4"
              />
              Ready to join this
              <span
                class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >
                Community?
              </span>
            </CardTitle>
          </CardHeader>
          
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            Join our vibrant Instagram community! Connect, share, and grow with
            like-minded enthusiasts. Click to dive in! ✨
          </CardContent>
           
         <CardFooter>
  <Button 
    as-child
    class="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white font-semibold border-0 px-8 py-3 shadow-lg transition-all duration-200 hover:shadow-xl no-underline"
  >
    <a
      href="https://www.instagram.com/ieeeclasypcs?igsh=NDVhcjdmZ3p5ZWR6"
      target="_blank"
      class="no-underline text-white"
    >
      Join Instagram
    </a>
  </Button>
</CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>