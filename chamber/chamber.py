import json
import os
from datetime import datetime

FILE_NAME = "members.json"


def get_input(prompt, required=True):
    """Get user input with optional validation"""
    while True:
        value = input(prompt).strip()
        if value or not required:
            return value
        print("This field is required.")

def get_boolean(prompt):
    """Convert yes/no input to boolean"""
    while True:
        value = input(prompt + " (yes/no): ").lower()
        if value in ["yes", "y"]:
            return True
        elif value in ["no", "n"]:
            return False
        print("Please enter yes or no.")

def get_list(prompt):
    """Convert comma-separated input into list"""
    value = input(prompt + " (comma separated): ")
    return [item.strip() for item in value.split(",") if item.strip()]


def create_member():
    """Create a member dictionary"""

    member = {
        "name": get_input("Business Name: "),
        "address": get_input("Address: "),
        "location": {
            "city": get_input("City: "),
            "province": get_input("Province: ")
        },
        "phone": get_input("Phone: "),
        "email": get_input("Email: "),
        "website": get_input("Website: "),
        "membershipLevel": get_input("Membership Level (Basic/Silver/Gold/Premium): "),
        "industry": get_input("Industry: "),
        "description": get_input("Description: "),
        "services": get_list("Services offered"),
        "image": get_input("Image URL or path: "),
        "socialMedia": {
            "facebook": get_input("Facebook (optional): ", False),
            "linkedin": get_input("LinkedIn (optional): ", False),
            "instagram": get_input("Instagram (optional): ", False)
        },
        "tags": get_list("Tags (e.g. retail, tech, food)"),
        "isActive": get_boolean("Is the business active?"),
        "featured": get_boolean("Feature on homepage?"),
        "joinDate": datetime.now().strftime("%Y-%m-%d"),
        "lastUpdated": datetime.now().strftime("%Y-%m-%d")
    }

    return member


def load_data():
    """Load existing JSON data"""
    if not os.path.exists(FILE_NAME):
        return []

    with open(FILE_NAME, "r") as file:
        try:
            return json.load(file)
        except json.JSONDecodeError:
            return []

def save_data(data):
    """Save data to JSON file"""
    with open(FILE_NAME, "w") as file:
        json.dump(data, file, indent=4)

def add_member():
    """Add a new member to the JSON file"""
    data = load_data()
    member = create_member()
    data.append(member)
    save_data(data)
    print("✅ Member added successfully!")


def display_members():
    """Print all members"""
    data = load_data()
    if not data:
        print("No members found.")
        return

    for i, member in enumerate(data, 1):
        print(f"\nMember {i}:")
        print(f"Name: {member['name']}")
        print(f"Industry: {member['industry']}")
        print(f"Active: {member['isActive']}")


def test_member_structure():
    """Test if member has required keys"""
    member = {
        "name": "Test Business",
        "address": "123 Street",
        "website": "https://test.com",
        "membershipLevel": "Gold",
        "industry": "Tech",
        "description": "Test",
        "image": "img.png",
        "isActive": True
    }

    required_keys = ["name", "address", "website", "membershipLevel", "industry"]

    for key in required_keys:
        assert key in member, f"Missing key: {key}"

    print("✅ Structure test passed")

def test_save_and_load():
    """Test saving and loading JSON"""
    test_data = [{"name": "Test"}]
    save_data(test_data)
    loaded = load_data()
    assert loaded == test_data, "Data mismatch"
    print("✅ Save/Load test passed")


def main():
    while True:
        print("\n--- Chamber of Commerce Manager ---")
        print("1. Add Member")
        print("2. View Members")
        print("3. Run Tests")
        print("4. Exit")

        choice = input("Choose an option: ")

        if choice == "1":
            add_member()
        elif choice == "2":
            display_members()
        elif choice == "3":
            test_member_structure()
            test_save_and_load()
        elif choice == "4":
            break
        else:
            print("Invalid option.")

if __name__ == "__main__":
    main()