import bgImage from "../Images/6057485.jpg";

function BackgroundImagePage({ children }) { 
    return (
        <main className="min-h-screen w-full relative overflow-hidden">
{/* w-full prevents horizontal scroll */}
            <img 
                src={bgImage} 
                alt="Background" 
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                {children}
            </div>
        </main>
    );
}

export default BackgroundImagePage;
