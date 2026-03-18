import { Link } from "react-router-dom";
import { serviceCategories } from "../../../components/public-layout/menuData";
import {
  getServiceImageByPath,
  getServiceSummaryByPath,
} from "../shared/serviceImage";

const CATEGORY_ROUTE_BY_NAME: Record<string, string> = {
  Equestrian: "equestrian",
  "Beauty & Spa": "beauty-spa",
  "Wellness & Fitness": "wellness",
  "Tours & Travel": "travel",
  "Restaurants & Catering": "restaurants",
  "Multimedia Production": "multimedia",
  "Events & Wedding Mgmt": "events",
  Outsourcing: "outsourcing",
};

export default function Services() {
  const categories = Object.entries(serviceCategories).map(([name, value]) => ({
    name,
    ...value,
    categoryPath: `/services/${CATEGORY_ROUTE_BY_NAME[name] || "equestrian"}`,
  }));

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10 md:py-14 bg-slate-50 min-h-[calc(100vh-220px)]">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Services
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900">
            All Service Categories
          </h1>
          <p className="text-slate-600 max-w-3xl">
            Explore all categories and open each service detail with the same
            rich page experience.
          </p>
        </header>

        <div className="space-y-8">
          {categories.map((category) => (
            <article
              key={category.name}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-slate-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-52 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        {category.name}
                      </h2>
                      <p className="text-slate-600 mt-1">{category.desc}</p>
                    </div>
                    <Link
                      to={category.categoryPath}
                      className="shrink-0 px-3 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      View Category
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="group bg-slate-50 rounded-xl border border-slate-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
                      >
                        <img
                          src={getServiceImageByPath(service.path, {
                            width: 640,
                            height: 360,
                            variant: "thumb",
                          })}
                          alt={service.name}
                          className="w-full h-24 object-cover rounded-md mb-2"
                        />
                        <h3 className="text-sm md:text-base font-semibold text-slate-900 group-hover:text-blue-700">
                          {service.name}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                          {getServiceSummaryByPath(
                            service.path,
                            service.name,
                            category.desc,
                          )}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
