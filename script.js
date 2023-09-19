function search() {
    var fruits = document.getElementById('t_search').value;  
    var fruit = fruits.trim();
    if (fruit == '') {
        // alert("please enter a fruit name");
    }else{
    document.getElementById('t_search').value = '';
    document.getElementById('benefit').style.display = "block";
    document.getElementById('benefits').style.display = "block";


var fav_fruit = document.getElementById("fruit");
var benefits = document.getElementById("benefits");

switch (fruit) {
    case 'apple':
    case 'Apple':
    case 'ပန်းသီး':
    case 'APPLE':
        fav_fruit.innerHTML = "Apple";
        benefits.innerHTML = "They're rich in fiber and antioxidants. Eating them is linked to a lower chance of getting many chronic conditions, including diabetes, heart disease, and cancer. Apples may also promote weight loss and improve gut and brain health.";
        ; break;
    case 'orange':
    case 'Orange':
    case 'ORANGE':
        fav_fruit.innerHTML = "Orange";
        benefits.innerHTML="The vitamin C found in oranges has other health benefits too: Forms blood vessels, muscles, cartilage, and collagen in your bones. Fights inflammation and can reduce the severity of conditions like asthma, rheumatoid arthritis, and cancer. Boosts the body's immune system to protect against viruses and germs."; break;
    case 'pineapple':
    case 'Pineapple':
    case 'PINEAPPLE':
        fav_fruit.innerHTML = "Pineapple";
        benefits.innerHTML = "Bromelain, the digestive enzyme in pineapple, has anti-inflammatory and pain-relieving properties. This helps when you have an infection, like sinusitis, or an injury, like a sprain or burn. It also offsets the joint pain of osteoarthritis. The vitamin C in pineapple juice also keeps inflammation levels low"; break;
    case 'banana':
    case 'Banana':
    case 'BANANA':
        fav_fruit.innerHTML = "Banana";
        benefits.innerHTML = "Bananas are a good source of several vitamins and minerals, especially potassium, vitamin B6, and vitamin C.Bananas are a good source of potassium. A diet high in potassium can lower blood pressure in people with elevated levels and benefits heart health."; break;
    case 'strawberry':
    case 'Strawberry':
    case 'STRAWBERRY':
        fav_fruit.innerHTML = "Strawberry";
        benefits.innerHTML = "Strawberries are rich in vitamin C and other antioxidants, which help reduce the risk of serious health conditions like cancer, diabetes, stroke, and heart disease. It's also an excellent source of: Magnesium.";
        break;
    
    case 'Mango':
    case 'mango':
    case 'MANGO':   
        fav_fruit.innerHTML = "Mango";
        benefits.innerHTML = "Mango is rich in vitamins, minerals, and antioxidants, and it has been associated with many health benefits, including potential anticancer effects, as well as improved immunity and digestive and eye health. Best of all, it's tasty and easy to add to your diet as part of smoothies and many other dishes.";
        break;
    case 'kiwi':
    case 'Kiwi':
    case 'KIWI':
        fav_fruit.innerHTML = 'Kiwi';
        benefits.innerHTML = 'Kiwis are high in Vitamin C and dietary fiber and provide a variety of health benefits. This tart fruit can support heart health, digestive health, and immunity. The kiwi is a healthy choice of fruit and is rich with vitamins and antioxidants.'; break;
    case 'watermelon':
    case "Watermelon":
    case 'WATERMELON':
        fav_fruit.innerHTML = 'Watermelon';
        benefits.innerHTML = '“The water and vitamins A, B6, and C in watermelon help your skin stay soft, smooth, and supple,” Derocha says. Vitamin C boosts collagen production, which improves skin elasticity and blood flow to the skin. And vitamin A helps repair skin cells, preventing dry, flaky skin, while vitamin B6 helps with skin breakouts.';
        break;
    case 'guava':
    case 'Guava':
    case 'GUAVA':
        fav_fruit.innerHTML = 'Guava';
        benefits.innerHTML = 'They protect against infectious diseases and serve as a remedy for oral issues. Guavas enhance immunity due to their high vitamin C content, aid in diabetes management, promote heart health, assist in weight loss, improve digestion, boost brain function, enhance skin health, relieve stress, and benefit pregnant women.';
        break;
    case 'lemon':
    case 'Lemon':
    case 'LEMON':
        fav_fruit.innerHTML = 'Lemon';
        benefits.innerHTML = "Supports heart health. Help to boost immunity. May improve digestion.Help to control weight. Help to reduce cancer risk. May help in oral disorders.Beneficial for skin. Can Keep Hypertension in Check. Kidney Stone Prevention.Beneficial for Throat Infection. Good for Hair.";
        break;
    case 'cherry':case'Cherry':case 'CHERRY':
        fav_fruit.innerHTML = 'Cherry';
        benefits.innerHTML = "They're low-GI (glycaemic index). They're a heart-healthy choice.May reduce blood pressure. May help manage cholesterol. May help manage blood sugar levels. May help inflammatory conditions. May enhance recovery after exercise.May improve sleep.";
        break;
    case 'avocado':
    case 'Avocado':
    case 'AVOCADO':
        fav_fruit.innerHTML = 'Avocado';
        benefits.innerHTML = 'Boosts Satiety. Eating healthy fats helps slow stomach emptying, which keeps you full longer than usual and delays the return of hunger.Helps Manage Body Weight.Protects Your Heart.Prevents Diabetes Complications.Boosts NutrientsPromotes Healthy Digestion.Increases Brain Function.Protects Your Eyes.';
        break;
    case 'pomegranate':
    case 'Pomegranate':
    case 'POMEGRANATE':
        fav_fruit.innerHTML = 'Pomegranate';
        benefits.innerHTML = "They are rich in antioxidants.They are a good source of fiber.They provide vitamin C.They may help to improve workouts.They may help with inflammation.They may help to improve heart health.They provide potassium.They may help improve kidney health.";
        break;
    case 'fig':
    case 'Fig':
    case 'FIG':
        fav_fruit.innerHTML = 'Fig';
        benefits.innerHTML = 'It is a highly nutritious fruit. Its fibre, potassium, antioxidant content can help control blood pressure, aid digestion, help with your weight loss journey, protects your heart, prevents constipation, cures reproductive problems and may also support strong joints.';
        break;
    case 'coconut':
    case 'Coconut':
    case 'COCONUT':
        fav_fruit.innerHTML = 'Coconut';
        benefits.innerHTML = 'Both coconut flesh and oil have high levels of good (HDL) cholesterol which is beneficial for our hearts. Coconut is high in fiber and low in carbs, so it helps control blood sugar levels in our bodies. Coconut meat and water contain numerous antioxidants that fight against factors causing cell damage.';
        break;
    case 'apricot':
    case 'Apricot':
    case 'APRICOT':
        fav_fruit.innerHTML = 'Apricot';
        benefits.innerHTML = 'Low in calories. Apricots are low-calorie fruits, with only 17 calories per raw apricot. High in antioxidants.Promotes gut health. Protects your heartPromotes eye health.Strengthens bones.Lowers the risk of anemia.Boosts skin health.';
        break;
    case 'grape':
    case 'Grape':
    case 'GRAPE':
        fav_fruit.innerHTML = 'Grape';
        benefits.innerHTML = 'The nutrients in grapes may help protect against cancer, eye problems, cardiovascular disease, and other health conditions. Resveratrol is a key nutrient in grapes that may offer health benefits. Grapes are a good source of fiber, potassium, and a range of vitamins and other minerals.';
        break;
    case 'pear':
    case 'Pear':
    case 'PEAR':
        fav_fruit.innerHTML = 'Pear';
        benefits.innerHTML = 'Their iron and copper content aids in better blood circulation and wound healing. Pears are linked to improved heart health, boosted immunity, and potential anti-cancer effects. Additionally, they may lower the risk of diabetes and promote gut health, aiding weight loss due to their high fibre and water content.';
        break;
    case 'blueberry':
    case 'Blueberry':
    case 'BLUEBERRY':
        fav_fruit.innerHTML = 'Blueberry';
        benefits.innerHTML = 'May be protective.May help manage blood pressure.May help reduce the risk of heart disease.May help regulate blood sugar. May help maintain eye health. May support immune health.May reduce gastrointestinal symptoms. May ease urinary tract infection symptoms.';
        break;
    case 'blackberry':
    case 'Blackberry':
    case 'BLACKBERRY':
        fav_fruit.innerHTML = 'Blackberry';
        benefits.innerHTML = "They're packed with vitamin C. Just one cup of raw blackberries has 30.2 milligrams of vitamin C. They're high in fiber. Most people don't get enough fiber in their diet. Great source of vitamin K. High in manganese. May boost brain health. Helps support oral health.";
        break;
    case 'durian':
    case 'Durian':
    case 'DURIAN':
        fav_fruit.innerHTML = 'Durian';
        benefits.innerHTML = 'Durian is widely celebrated for its long list of health benefits, which include the ability to boost immune system, prevent cancer and inhibit free radical activity, improve digestion, strengthen bones, improve signs of anaemia, prevent premature aging, lower blood pressure, and protect against cardiovascular diseases.';
        break;
    case 'gooseberry':
    case 'Gooseberry':
    case 'GOOSEBERRY':
        fav_fruit.innerHTML = 'Gooseberry';
        benefits.innerHTML = 'Gooseberries are a nutritious fruit containing vitamins, minerals, and antioxidants. They are low in calories and fiber-rich, helping people to manage their weight. Scientists have studied the active compounds in gooseberries and suggested they may benefit cancer, brain function, and diabetes.';
        break;
    case 'jackfruit':
    case 'Jackfruit':
    case 'JACKFRUIT':
        fav_fruit.innerHTML = 'Jackfruit';
        benefits.innerHTML = 'The potassium in this tropical fruit could help lower your blood pressure, which can help stave off heart disease, stroke, and bone loss. Skin problems. The high amounts of vitamin C in jackfruit may help protect your skin from sun damage. You need plenty of that nutrient to keep your skin firm and strong.';
        break;
    case 'plum':
    case 'Plum':
    case 'PLUM':
        fav_fruit.innerHTML = 'Plum';
        benefits.innerHTML = 'Lower Blood Pressure. Protection Against Cell Damage/Cancer. Ideal For Weight Loss. Low Calories. Great For Bone Health. Effective for Constipation Relief. Improves Memory & Brain Health. Boosts Heart Health.';
        break;
    case 'kumquat':
    case 'Kumquat':
    case 'KUMQUAT':
        fav_fruit.innerHTML = 'Kumquat';
        benefits.innerHTML = 'It is a high source of powerful antioxidants, vitamin C, flavonoids, vitamin A, fiber, phytonutrients, plant compounds, calcium, magnesium, etc. This helps promote heart, bone, and skin health. It also helps in reducing blood sugar levels, boosts immunity, reduces weight, and prevents the formation of cancer cells.';
        break;
    case 'lime':
    case 'Lime':
    case 'LIME':
        fav_fruit.innerHTML = 'Lime';
        benefits.innerHTML = "Limes are high in vitamin C and antioxidants — both of which may offer health benefits. Eating limes or drinking the juice may improve immunity, reduce heart disease risk factors, prevent kidney stones, aid iron absorption, and promote healthy skin. Avoid limes if you're allergic to citrus fruit.";
        break;
    case 'Mulberry':
    case 'mulberry':
    case 'MULBERRY':
        fav_fruit.innerHTML = 'Mulberry';
        benefits.innerHTML = 'Improves digestive health. Controls blood sugar levels. Reduces cancer risk. Improves blood circulation. Improves immunity. Builds bone tissue. Promotes brain health. Promotes liver health';
        break;
    case 'papaya':
    case 'Papaya':
    case 'PAPAYA':
        fav_fruit.innerHTML = 'Papaya';
        benefits.innerHTML = 'Papayas contain an enzyme called papain that aids digestion; in fact, it can be used as a meat tenderizer. Papaya is also high in fiber and water content, both of which help to prevent constipation and promote regularity and a healthy digestive tract.';
        break;
    case 'DragonFruit': 
    case'DRAGONFRUIT':
    case 'Dragonfruit':
    case 'dragonfruit':
    case 'dragon fruit':
    case 'Dragon fruit':
    case 'Dragon Fruit':
    case 'DRAGON FRUIT':
        fav_fruit.innerHTML = 'Dragon Fruit';
        benefits.innerHTML = 'Dragon fruit is high in vitamin C and other antioxidants, which are good for your immune system. It can boost your iron levels. Iron is important for moving oxygen through your body and giving you energy, and dragon fruit has iron. And the vitamin C in dragon fruit helps your body take in and use the iron.';
        break;
    case 'Passionfruit':
    case 'passion':
    case 'Passion':
    case 'PASSION':
    case 'Passion Fruit':
    case "Passion fruit":
    case "passion fruit":
    case 'passionfruit':
    case 'PASSION FRUIT':
    case 'PASSIONFRUIT':
        fav_fruit.innerHTML = 'Passion Fruit';
        benefits.innerHTML = 'A cup of passion fruit with the pulp and seeds contains 24.5 grams of fiber - the equivalent of more than 4 cups of bran cereal! Passion fruit is also an excellent source of vitamin C to keep your immune system strong, and vitamin A, which boosts vision, fights infections and keeps your skin healthy.';
        break;
    case 'Peach':
    case 'peach':
    case 'PEACH':
        fav_fruit.innerHTML = 'Peach';
        benefits.innerHTML = 'Consumption of fruits like peaches that are rich in vitamin A, are known to offer protection from lung and oral cancers. They contain many vital minerals such as potassium, fluoride and iron. Potassium is an important component of cell and body fluids that help regulate heart rate and blood pressure.';
        break;
    case 'Persimmon':
    case 'persimmon':
    case 'PERSIMMON':
        fav_fruit.innerHTML = 'Persimmon';
        benefits.innerHTML = 'Persimmon can be eaten raw, along with its skin. Some health benefits of persimmon include improving heart, skin and vision health. They are packed with vitamins A and C, dietary fiber, and antioxidants, making them a valuable addition to a balanced diet.';
        break;
    case 'Melon':
    case 'melon':
    case 'MELON':
        fav_fruit.innerHTML = 'Melon';
        benefits.innerHTML = "Melons are hydrating and full of healthy antioxidants, such as beta-carotene in cantaloupe and lycopene in watermelon. They're also good sources of electrolytes like potassium, as well as vitamin C.";
        break;
    case 'jamun':
    case 'Jamun':
    case 'JAMUN':
    case 'black plum':
    case 'Black plum':
    case 'BLACK PLUM':
    case 'Java Plum':
    case 'java plum':
    case 'Java plum':
        fav_fruit.innerHTML = 'black plum';
        benefits.innerHTML = 'Rich in antioxidants. Regulates blood sugar levels. Supports digestive health. Boosts immunity. Promotes heart health. Supports weight management.';
        break;
    case 'Jujube':
    case 'JUJUBE':
    case 'jujube':
        fav_fruit.innerHTML = 'Jujube';
        benefits.innerHTML = 'Jujube contains a high amount of potassium which helps in vasodilation and maintains blood pressure optimally. Jujube fruits have betulinic acid that has anti-inflammatory and antibacterial properties. This date contains a bromelain enzyme that reduces mucus build-up and clears respiratory pathways.';
        break;
    case 'Quince':
    case 'quince':
    case 'QUINCE':
        fav_fruit.innerHTML = 'Quince';
        benefits.innerHTML = "It's rich in vitamin C, fiber and antioxidants. It also contains a small amount of several other micronutrients, including copper, potassium and iron. Potential quince benefits include decreased bacterial growth, improved heart health, faster wound healing, and relief from constipation and GERD.";
        break;
    case 'Goji berry':
    case 'goji berry':
    case 'GOJI BERRY':
        fav_fruit.innerHTML = 'Goji berry';
        benefits.innerHTML = 'In Asia, goji berries have been eaten for generations in the hopes of extending the lifespan. This fruit offers high amounts of protein, Vitamin A, Vitamin C, riboflavin, potassium, iron, magnesium, copper, and zinc. Goji also provides high levels of many antioxidants, but especially beta-carotene and zeaxanthin.';
        break;
    case 'Mandarin':
    case 'mandarin':
    case 'MANDARIN':
        fav_fruit.innerHTML = 'Mandarin';
        benefits.innerHTML = 'They can support early aging, aching back/knees, impotence, diabetes, dizziness, blurry vision and shortness of breath. Goji berries can support balanced emotions and show antioxidant effects contributing to boosted immunity. They are generally safe for consumption in moderation.';
        break;
    case 'Longan':
    case 'longan':
    case 'LONGAN':
        fav_fruit.innerHTML = 'Longan';
        benefits.innerHTML = 'Longan is an exotic fruit that belongs to the soapberry family. Boosts memory. Enhances sleep quality. Promotes skin health. Anti-inflammatory. Boosts immunity.';
        break;
    case 'Blackcurrant':
    case 'BlackCurrant':
    case 'BLACKCURRaNT':
    case 'blackcurrant':
        fav_fruit.innerHTML = 'Blackcurrant';
        benefits.innerHTML = 'It has high vitamin C content and is a powerful antioxidant. It may have anti-inflammatory properties. It may help strengthen the immune system. It may have antimicrobial, antiviral, and antiseptic potential. It may have anti-cancer effects. It may aid in healthy digestion.';
        break;
    case 'Tamarind':
    case 'tamarind':
    case 'TAMARIND':
        fav_fruit.innerHTML = 'Tamarind';
        benefits.innerHTML = 'A rich source of antioxidants. May have anticancer properties. May improve heart health and cholesterol. Offers liver protective benefits. Provides natural antimicrobial benefits. May offer anti-diabetic effects.';
        break;
    case 'Satsuma':
    case 'satsuma':
    case 'SATSUMA':
        fav_fruit.innerHTML = 'Satsuma';
        benefits.innerHTML = 'Satsumas are an excellent source of immune- boosting vitamin C. Vitamin C is crucial to the synthesis of collagen in the body, which helps heal wounds and holds together our tendons, ligaments, bones and blood vessels. Vitamin C also plays a role iron absorption, helping the body retain more of this essential mineral.';
        break;
    
    
    

    

    
    default:
        benefits.innerHTML = "<i>Oops! Your fruit is not in data :( Please check your spelling or type a proper fruit (^w^)</i>";
        document.getElementById('benefit').style.display = "none";
        break;
}
}        }
