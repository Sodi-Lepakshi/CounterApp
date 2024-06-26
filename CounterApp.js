document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value;
    
    // Count words
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    
    // Count characters
    const charCount = text.length;
    
    // Count numbers
    const numCount = (text.match(/\d/g) || []).length;
    
    // Count special characters
    const specialCharCount = (text.match(/[^\w\s]/g) || []).length;
    
    // Count paragraphs
    const paraCount = text.split(/\n+/).filter(para => para.trim().length > 0).length;
    
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('charCount').textContent = charCount;
    document.getElementById('numCount').textContent = numCount;
    document.getElementById('specialCharCount').textContent = specialCharCount;
    document.getElementById('paraCount').textContent = paraCount;
});
