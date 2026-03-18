import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "../../../components/public-layout/menuData";
import ServiceDetailTemplate from "../shared/ServiceDetailTemplate";
import {
  getServiceImageByPath,
  getServiceSummaryByPath,
} from "../shared/serviceImage";

const CATEGORY_BY_ROUTE: Record<string, string> = {
  equestrian: "Equestrian",
  "beauty-spa": "Beauty & Spa",
  wellness: "Wellness & Fitness",
  travel: "Tours & Travel",
  restaurants: "Restaurants & Catering",
  multimedia: "Multimedia Production",
  events: "Events & Wedding Mgmt",
};

export default function ServiceCategory() {
  const params = useParams<{ category: string; "*": string }>();
  let categoryRoute = params.category || "";
  let serviceSlug = params["*"] || "";

  if (!categoryRoute && serviceSlug) {
    const [categoryFromWildcard, ...rest] = serviceSlug.split("/");
    categoryRoute = categoryFromWildcard || "";
    serviceSlug = rest.join("/");
  }

  const categoryKey = CATEGORY_BY_ROUTE[categoryRoute];
  const categoryData = categoryKey ? serviceCategories[categoryKey] : null;

  if (!categoryData) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Service Category Not Found
          </h1>
          <p className="text-gray-600 mt-2">
            Please return to services and choose a valid category.
          </p>
          <Link
            to="/services"
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  if (serviceSlug) {
    const fullPath = `/services/${categoryRoute}/${serviceSlug}`;
    const service = categoryData.services.find(
      (item) => item.path === fullPath,
    );

    if (service) {
      return (
        <ServiceDetailTemplate
          categoryName={categoryKey}
          categoryDescription={categoryData.desc}
          serviceName={service.name}
          image={getServiceImageByPath(service.path, {
            width: 1600,
            height: 900,
            variant: "hero",
          })}
          servicePath={service.path}
          summary={getServiceSummaryByPath(
            service.path,
            service.name,
            categoryData.desc,
          )}
        />
      );
    }
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            {categoryKey}
          </h1>
          <p className="text-sm text-gray-600 max-w-3xl">{categoryData.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryData.services.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="group bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <img
                src={getServiceImageByPath(service.path, {
                  width: 960,
                  height: 540,
                  variant: "card",
                })}
                alt={service.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                {getServiceSummaryByPath(
                  service.path,
                  service.name,
                  categoryData.desc,
                )}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us and we will help you pick the right service package.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
