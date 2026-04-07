<template>


    <div class="flex justify-center items-center w-full">
        <div class="flex gap-6 max-w-screen-xl">

            <div class="card w-1/6">
                <Accordion value="0">
                    <AccordionPanel value="0">
                        <AccordionHeader class="p-2 ">Header I</AccordionHeader>
                        <AccordionContent class="mt-2 p-0">
                            <ul class="list:none flex flex-col items-start  gap-10 p-0">
                                <li class="m-0">Lorem</li>
                                <li class="m-0">Lorem</li>
                                <li class="m-0">Lorem</li>
                                <li class="m-0">Lorem</li>
                                <li class="m-0">Lorem</li>
                                <li class="m-0">Lorem</li>
                                <li class="m-0">Lorem</li>
                                <li class="m-0">Lorem</li>
                                <li class="m-0">Lorem</li>
                                <li class="m-0">Lorem</li>

                            </ul>

                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>

            <div class="w-5/6 ">


                <div
                    class="p-10 rounded-[8px] bg-gradient-to-br from-[#010314] via-[#1a0f3a] to-[#3F1668] bg-[#160223] flex gap-3">
                    <div class="w-3/5 flex flex-col gap-3 items-start justify-center">
                        <WrGradientText text="All Roads Lead to Brand Identity" append-class="text-[46px]" />
                        <p class="text-gray-500 txt-[18px]">Why manage five workspaces when one does everything better?
                        </p>
                        <WrButton link="#" class=" ">start your branding</WrButton>
                    </div>

                    <div class=" w-2/5 rounded-[8px]">
                        <img src="/content/practice-img/img1.svg" class="w-full object-cover">
                    </div>
                </div>

                <div class="flex justify-center items-center mt-5">
                    <div class="rounded-[8px] border w-[404px] h-[292px]">
                        <p>Brand Trust You Can Rely On </p>
                        <p>Stand out and earn trust with a brand built to last.</p>

                    </div>
                    <div class=" rounded-[8px] w-[539px] h-[292px]">
                        <p>Seamless Multi-Channel Consistency</p>
                        <p>From web to social, your brand stays consistent and cohesive.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>