package com.revature.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.Scanner;
import java.io.BufferedReader;

@Service
@Transactional
public class ProfanityService {
    public ArrayList<String> profanity;
    private File profanityConfig;
    public ProfanityService()
    {
        try{
            profanityConfig = new File("src/main/resources/profanityList.txt");
            BufferedReader reader = new BufferedReader(new FileReader(profanityConfig));
            profanity = new ArrayList<String>();
            String current = "";
            while (true)
            {
                current = reader.readLine();
                if (current==null)
                    break;
                profanity.add(current);
            }
            System.out.println(profanity.toString());
            reader.close();
        }
        catch(IOException e)
        {
            e.printStackTrace();
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }

    public String filterProfanity(String text) {
        for (String word : profanity) {
            text = text.replaceAll("(?i)" + word, asterisks(word.length()));
        }
        return text;
    }

    private String asterisks(int length) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length; i++) {
            sb.append("*");
        }
        return sb.toString();
    }
}
