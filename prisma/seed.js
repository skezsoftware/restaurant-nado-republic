const prisma = require("../prisma");

const seed = async () => {
  const createRestaurants = async () => {
    try {
      const restaurants = [
        {
          name: "Nado Republic",
          description: "Authentic Roman Italian Cuisine",
          address: "1007 C Ave, Coronado, CA 92118",
          phone: "(619) 996-3271",
          email: "gm@nadorep.com",
          tockURL: "https://www.exploretock.com/nado-republic--coronado",
          giftCardURL:
            "https://www.toasttab.com/nado-republic-1007-c-ave/giftcards",
          uberEatsURL:
            "https://www.ubereats.com/store/nado-republic/8Xj265kVRguAkKtHNVilxw?utm_campaign=place-action-link&utm_medium=organic&utm_source=google",
          doorDashURL:
            "https://www.doordash.com/store/nado-republic-coronado-574738/?utm_campaign=gpa",
          sliceURL:
            "https://slicelife.com/restaurants/ca/coronado/92118/nado-republic/menu?utm_campaign=google-order-action-link&rwg_token=AJKvS9Uido2KB1c_Hu05amv_wMoRSY1kQ3ppNZijZjRbm6z2yWXUg3lR3HJFLYlo_UXvCLlfLhwLhydFbCElcKyOGWGC8qaZrA%3D%3D",
          grubHubURL:
            "https://www.grubhub.com/restaurant/nado-republic-1007-c-ave-coronado/2577324?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&delivery=true&rwg_token=AJKvS9UsWeL80HQF_ESAAUpNFIAIj45Omb7A-FMNmUHaiNzRrXPmoSzqhuv_pLI0h6CZepkDAS4bqoO02SX0so6QMyBY4YlE9Q%3D%3D",
          logo: "https://cdn.doordash.com/media/restaurant/cover/Nado_Republic_Coronado.png",
        },
      ];
      await prisma.restaurant.createMany({
        data: restaurants,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const createAppetizers = async () => {
    try {
      const appetizers = [
        {
          name: "Tuna Tartare",
          description:
            "Fresh tuna with soy sauce, garlic, egg yolk, spicy mayo, sesame, arugula",
          price: 16,
        },
        {
          name: "Calamari",
          description:
            "Fried, topped with parsley and served with a side of spicy mayonnaise",
          price: 15,
        },
        {
          name: "Brussels Sprouts",
          description: "Lemon and Pecorino Romano cheese",
          price: 16,
        },
        {
          name: "Burrata",
          description:
            "Fresh burrata cheese served with arugula and cherry tomatoes",
          price: 18,
        },
        {
          name: "Polpette",
          description:
            "Homemade ground beef meatballs made with bread crumbs and cheese, served with marinara sauce",
          price: 16,
        },
      ];
      await prisma.appetizer.createMany({
        data: appetizers,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const createSalads = async () => {
    try {
      const salads = [
        {
          name: "Caesar Salad",
          description:
            "Fresh lettuce, home made focaccia croutons, anchovies, shaved parmesan cheese, and Caesar dressing",
          price: 16,
        },
        {
          name: "Strawberry Salad",
          description:
            "Arugula, strawberry vinaigarette, goat cheese, toasted almonds, crispy parmesan",
          price: 16,
        },
        {
          name: "Gorgonzola Salad",
          description:
            "Organic spring mix, gorgonzola cheese, crispy prosciutto, and dry apricots",
          price: 16,
        },
        {
          name: "Spinach Salad",
          description:
            "Spinach, feta, cucumber, cherry tomatoes, olives, and balsamic dressing",
          price: 16,
        },
      ];
      await prisma.salad.createMany({
        data: salads,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const createPizzas = async () => {
    try {
      const pizzas = [
        {
          name: "Margherita",
          description: "Tomato sauce & mozzarella cheese",
          price: 17,
        },
        {
          name: "Piccante",
          description: "Tomato sauce, mozzarella cheese, spicy salami",
          price: 20,
        },
        {
          name: "Funghi e Salsiccia",
          description:
            "Tomato sauce, mozzarella cheese, italian sausage, mushrooms",
          price: 22,
        },
        {
          name: "4 Formaggi",
          description: "Mozzarella cheese, four selected italian cheeses",
          price: 18,
        },
        {
          name: "Puttanesca",
          description:
            "Tomato sauce, olives, chili, oregano, garlic, parsley, anchovies",
          price: 18,
        },
        {
          name: "Pesto",
          description:
            "Pesto sauce, mozzarella cheese, cherry tomatoes, parmesan flakes",
          price: 19,
        },
      ];
      await prisma.pizza.createMany({
        data: pizzas,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const createPastas = async () => {
    try {
      const pastas = [
        {
          name: "Fusilli Pesto",
          description: "Authentic ligurian pesto with pinoli nuts",
          price: 22,
        },
        {
          name: "Bucatini Amatriciana",
          description:
            "Marinara sauce, guanciale, dash of chili oil and pecorino cheese",
          price: 25,
        },
        {
          name: "Pappardelle Bolognese",
          description: "Ground beef, tomatoes, carrots, dash of red wine",
          price: 26,
        },
        {
          name: "Rigatoni Boscaiola",
          description:
            "Sausage, mushrooms, homemade cream sauce available pink or red",
          price: 26,
        },
        {
          name: "Ravioli Lobster",
          description: "Filled with lobster, served with a vodka sauce",
          price: 28,
        },
        {
          name: "Gnocchi Truffle",
          description:
            "Filled with asiago cheese, white creamy sauce and black truffle",
          price: 28,
        },
      ];
      await prisma.pasta.createMany({
        data: pastas,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const createAddOns = async () => {
    try {
      const addOns = [
        {
          name: "Meatball (one)",
          price: 6,
        },
        {
          name: "Shrimp",
          price: 6,
        },
        {
          name: "Mushrooms",
          price: 3,
        },
        {
          name: "Sausage",
          price: 4,
        },
        {
          name: "Truffle Oil",
          price: 3,
        },
        {
          name: "Burrata",
          price: 6,
        },
        {
          name: "Crispy Prosciutto",
          price: 4,
        },
        {
          name: "Sliced Prosciutto",
          price: 5,
        },
        {
          name: "Veggies",
          price: 6,
        },
      ];
      await prisma.addOn.createMany({
        data: addOns,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const createMeatsAndFish = async () => {
    try {
      const meatsAndFish = [
        {
          name: "Veal Saltimbocca",
          description:
            "Butter and sage, wrapped in prosciutto, served with seasonal vegetables",
          price: 36,
        },
        {
          name: "Grilled Salmon",
          description: "Lemon butter sauce, served with seasonal vegetables",
          price: 36,
        },
        {
          name: "Cotoletta alla Milanese",
          description:
            "Breaded chicken breast, served with seasonal vegetables",
          price: 34,
        },
      ];
      await prisma.meatAndFish.createMany({
        data: meatsAndFish,
      });
    } catch (error) {
      console.error(error);
    }
  };

  await createAppetizers();
  await createSalads();
  await createPizzas();
  await createPastas();
  await createAddOns();
  await createMeatsAndFish();
  await createRestaurants();
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
