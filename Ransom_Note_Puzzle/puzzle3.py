# Pseudocode
# 1) Make an array individually for both the note and magazine. 
# 2) Make a for loop to go through the words in noteArray
# 3) See if the word in noteArray exists in magazineArray 
    #a) if matching go to next word in noteArray and delete that word in magazineArray
    #b) if looped through all in magazine array return false
# 4) if all words could be matched then return true


def harmlessRansomNote(note, magazine): #Create function with two parameters note and magazine
    noteArray = note.split(' ') # make all the words in note as an array
    magazineArray = magazine.split(' ') #make all the words in note as an array
    
    print(noteArray)
    print(magazineArray)
    for word in magazineArray: #for loop through all words in noteArray
        if word in noteArray:
            print("Removing: " + word)
            magazineArray.remove(word)
            print(magazineArray)
            
        else:
            print("Trying to remove: " + word)
            print(magazineArray)
            print("false")
            return False
    print("true")
    return True    

# Code doesn't work because it is skipping a word


note1 = "This is a ransom note"
        
magazine1 = "Whatever is this asdfas"

magazine2 = "This is a ransom note"
            
magazine3 = "This is a ransom the note"   


def main():
    #harmlessRansomNote(note1, magazine1)
    #harmlessRansomNote(note1, magazine2)
    harmlessRansomNote(note1, magazine3)
        
main()
        
        
        
