import json

# ---------- Helper Functions ----------

def get_input(prompt):
    return input(f"{prompt}: ").strip()

def get_int(prompt):
    return int(input(f"{prompt}: ").strip())

def get_list(prompt):
    print(f"{prompt} (type 'done' to finish):")
    items = []
    while True:
        item = input("> ").strip()
        if item.lower() == "done":
            break
        items.append(item)
    return items

def get_objects(prompt, fields):
    print(f"{prompt} (type 'done' to finish):")
    items = []
    while True:
        first = input(f"{fields[0]} (or 'done'): ").strip()
        if first.lower() == "done":
            break
        
        obj = {fields[0]: first}
        for field in fields[1:]:
            obj[field] = input(f"{field}: ").strip()
        
        items.append(obj)
        print("--- Added ---")
    return items


# ---------- Main Data Collection ----------

data = {

    "profile": {
        "fullName": get_input("Full Name"),
        "title": get_input("Title"),
        "tagline": get_input("Tagline"),
        "avatar": get_input("Avatar path"),
        "birthDate": get_input("Birth Date (YYYY-MM-DD)"),
        "origin": get_input("Origin"),
        "currentLocation": get_input("Current Location"),
        "status": get_input("Status"),
        "yearsOfPractice": get_int("Years of Practice")
    },

    "identity": {
        "archetype": get_input("Archetype"),
        "personalityTraits": get_list("Personality Traits"),
        "coreValues": get_list("Core Values"),
        "mission": get_input("Mission"),
        "vision": get_input("Vision")
    },

    "teachings": {
        "mainTopics": get_list("Main Topics"),
        "philosophy": get_input("Philosophy"),
        "methods": get_list("Methods"),
        "levels": get_objects("Teaching Levels", ["level", "description"])
    },

    "influence": {
        "followers": get_int("Followers"),
        "globalReach": get_list("Global Reach"),
        "languages": get_list("Languages"),
        "impactStats": {
            "studentsTransformed": get_int("Students Transformed"),
            "retreatsHeld": get_int("Retreats Held"),
            "countriesVisited": get_int("Countries Visited")
        }
    },

    "content": {
        "quotes": get_list("Quotes"),
        "books": get_objects("Books", ["title", "year", "cover"]),
        "videos": get_objects("Videos", ["title", "url", "thumbnail"])
    },

    "events": {
        "upcoming": get_objects("Upcoming Events", ["name", "date", "location", "type"]),
        "past": get_objects("Past Events", ["name", "date", "location", "type"])
    },

    "services": {
        "offerings": get_objects("Services", ["name", "description", "price"])
    },

    "community": {
        "platforms": get_objects("Platforms", ["name", "url"]),
        "testimonials": get_objects("Testimonials", ["name", "message"])
    },

    "callToAction": {
        "primary": {
            "text": get_input("Primary CTA Text"),
            "link": get_input("Primary CTA Link")
        },
        "secondary": {
            "text": get_input("Secondary CTA Text"),
            "link": get_input("Secondary CTA Link")
        }
    }
}


# ---------- Save to JSON ----------

with open("spiritual_person.json", "w") as file:
    json.dump(data, file, indent=2)

print("\n✅ JSON file 'spiritual_person.json' created successfully!")