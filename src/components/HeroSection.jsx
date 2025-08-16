import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container p-4 max-w-4xl mx-auto text-center  z-10">
                <div className="space-y-6 p-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="text-orange-500 opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Taiwo</span>
                        <span className="text-orange-500 text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Oladipo</span>
                    </h1>
                </div>

                <p className="text-orange-400 text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I create stellar web experiences with modern technologies.
                    Specializing in front-end development, I build interfaces that are
                    both beautiful and functional.
                </p>

                <div className="pt-4 p-4opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View my Work
                    </a>
                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2 text-orange-500">Scroll</span>
                <ArrowDown className="h-5 w-5 text-orange-500" />
            </div>
        </section >
    );
};