package com.revature.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProfanityFilterService {
    public String filterProfanity(String text) {
        String[] profanity = {"fuck", "damn", "hell", "cum"};
        for (String word : profanity) {
            text = text.replaceAll("(?i)" + word, asterisks(String.valueOf(word.charAt(0)),word.length()));
        }
        return text;
    }

    private String asterisks(String firstLetter ,int length) {
        StringBuilder sb = new StringBuilder(firstLetter);
        for (int i = 1; i < length; i++) {
            sb.append("*");
        }
        return sb.toString();
    }
}
