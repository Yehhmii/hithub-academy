import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsHero from "@/components/sections/news/NewsHero";
import NewsCategories from "@/components/sections/news/NewsCategories";
import FeaturedPost from "@/components/sections/news/FeaturedPost";
import RecentStories from "@/components/sections/news/RecentStories";
import UpcomingEvents from "@/components/sections/news/UpcomingEvents";
import NewsletterSignup from "@/components/sections/news/NewsletterSignup";

export default function NewsPage() {
    return (
        <main className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Navbar />
            <div className="w-full">
                <NewsHero />
                <NewsCategories />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                        {/* Main Content - 2 columns */}
                        <div className="lg:col-span-2 space-y-12 w-full min-w-0">
                            <FeaturedPost />
                            <RecentStories />
                        </div>

                        {/* Sidebar - 1 column */}
                        <div className="w-full min-w-0">
                            <div className="sticky top-32 space-y-8">
                                <NewsletterSignup />
                                <UpcomingEvents />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
