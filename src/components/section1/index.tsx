import Termianl from "./terminal";

export default function Section1() {
  return (
    <div class="w-full relative bg-red-50 pt-32 min-h-screen  dark:bg-black dark:text-white">
            <div class='text-8xl absolute left-[50%] -translate-x-1/2 '>Welcome</div>
      <div class="w-[35ch] sm:w-[80ch]  absolute top-80 
                left-1/2
                -translate-x-1/2
                md:mr-0 text-xs bg-black text-white  lg:text-sm  dark:bg-gray-950">
        <Termianl
          charTime={0.1}
          lineTime={0.1}
          pause={false}
          lines={10}
          charSize={"12px"}
          bacgroundColor={"#000000"}
        />
      </div>
      <div
        style={{
          "clipPath":
            " polygon(55% 13%, 100% 0, 100% 60%, 100% 100%, 0 100%, 0 60%, 42% 42%); ",
        }}
        class="absolute w-full min-h-[50vh]  bottom-0 dark:bg-white dark:text-black"
      >
        Penguin
      </div>
    </div>
  );
}
