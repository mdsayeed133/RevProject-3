package com.revature.services;

import com.revature.models.Tag;
import com.revature.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TagService {

    private TagRepository tagRepository;

    @Autowired

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag getTagById(int tagId)
    {
        return tagRepository.findById(tagId).orElse(null);
    }
}